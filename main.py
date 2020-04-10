# qpy:kivy
# -*- coding: UTF-8 -*-

try:
    import sys
    reload(sys)
    sys.setdefaultencoding("utf-8")
except:
    pass

from kivy.app import App
from kivy.lang import Builder
from kivy.uix.screenmanager import ScreenManager

from kivy.utils import platform
import everyday_pb2

import os
import time


Builder.load_string("""
#:import C kivy.utils.get_color_from_hex
	
<Widget>:
    font_name:'data/droid.ttf'

<TextInput>:
    background_normal: 'data/white.png'
    background_active: 'data/white.png'
    padding: [root.width * 0.12]
    font_size: root.width * 0.05
    hint_text: "Input..."
    
<ShowLabel@Label>:
    color: C('#101010')
    text_size: (self.width, None)
    halign: 'center'
    valign: 'top'
    padding: (0, 0) # fixed in Kivy 1.8.1
    size_hint: (1, None)
    height: self.texture_size[1]
    markup: True

<Manager>:
    canvas.before: 
        Color: 
            rgba: 1, 1, 1, 1 
        Rectangle: 
            pos: self.pos 
            size: self.size

    Screen:
        name: "main"
        BoxLayout:
            orientation: "vertical"
            padding: [root.width * 0.2]
            spacing: root.width * 0.08
            Button:
                text: "Write"
                background_normal: 'data/blue.png'
                on_release: root.current = 'write'
            Button:
                text: "Read"
                background_normal: 'data/green.png'
                on_release: root.read_button()
                
    Screen:
        name: "write"
        BoxLayout:
            orientation: "vertical"
            TextInput:
                id: input
                on_double_tap: root.on_textinput_double_tap()
            BoxLayout:
                orientation: "horizontal"
                size_hint: (1, 0.6)
                padding: [root.width * 0.09]
                spacing: root.width * 0.08
                Button:
                    text: "Cancel"
                    background_normal: 'data/blue.png'
                    on_release: root.cancel_button()
                Button:
                    text: "Save"
                    background_normal: 'data/green.png'
                    on_release: root.save_button()

    Screen:
        name: "read"     
        BoxLayout:
            orientation: "vertical"
            ScrollView:
                ShowLabel:
                    id: show
            BoxLayout:
                orientation: "horizontal"
                size_hint: (1, 0.6)
                padding: [root.width * 0.09]
                spacing: root.width * 0.08
                Button:
                    text: "Last"
                    background_normal: 'data/blue.png'
                    on_release: root.last_button()
                Button:
                    text: "Next"
                    background_normal: 'data/green.png'
                    on_release: root.next_button()
""")


class Manager(ScreenManager):

    def __init__(self, **kwargs):
        self.app = App.get_running_app()
        self.special_char = '\n\n' + '——————————————' + '\n\n'
        self.everyday = self.app.everyday
        self.diary_list = self.split_diary()
        super(Manager, self).__init__(**kwargs)

    def split_diary(self):
        list_ = []
        for oneday in self.everyday.oneday:
            sub_text_list = [content.text for content in oneday.content]
            sub_text_list.insert(0, oneday.date)
            text = self.special_char.join(sub_text_list)
            list_.append(text)
        return list_

    def diary_date(self):
        list_ = []
        for oneday in self.everyday.oneday:
            date = oneday.date
            list_.append(date)
        return list_

    def today(self):
        current = time.localtime()
        # print(time.strftime("%b", current)[-1])
        if time.strftime("%b", current)[-1] not in list("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"):
            t = time.strftime('20%y年%m月%d日', current)
        else:
            t = time.strftime("%b %d, 20%y", current)
        return t

    def last_diary_day(self):
        if self.diary_list:
            return self.diary_date()[-1]
        else:
            return ''

    def save(self):
        text = self.ids.input.text.strip(' \n')
        if text == '':
            return
        if self.today() == self.last_diary_day(): # same day
            content = self.everyday.oneday[-1].content.add()
            content.text = text
        else: # new day
            oneday = self.everyday.oneday.add()
            oneday.date = self.today()
            content = oneday.content.add()
            content.text = text
        self.app.write(self.everyday.SerializeToString())

    def on_textinput_double_tap(self):
        text = self.ids.input.paste()

    def cancel_button(self):
        self.ids.input.text = ''
        self.current = 'main'

    def save_button(self):
        self.save()
        self.ids.input.text = ''
        self.current = "main"

    def read_button(self):
        self.diary_list = self.split_diary()
        # print(self.diary_list)
        if len(self.diary_list) == 0:
            self.ids.show.text = "Haven't anything yet!"
        else:
            self.ids.show.text = self.diary_list[-1]
        self.diary_length = len(self.diary_list)
        self.index = self.diary_length - 1
        self.current = "read"

    def last_button(self):
        if self.index <= 0:
            #self.ids.show.text = "No more!"
            self.current = "main"
        else:
            self.index = self.index - 1
            self.ids.show.text = self.diary_list[self.index]

    def next_button(self):
        if self.index >= self.diary_length - 1:
            #self.ids.show.text = "No more!"
            self.current = "main"
        else:
            self.index = self.index + 1
            self.ids.show.text = self.diary_list[self.index]


class DiaryApp(App):

    def __init__(self, **kwargs):
        if platform == 'android':
            from jnius import autoclass, cast
            PythonActivity = autoclass('org.kivy.android.PythonActivity')
            currentActivity = cast('android.app.Activity', PythonActivity.mActivity)
            context = cast('android.content.Context', currentActivity.getApplicationContext())
            self.root_path = context.getExternalFilesDir(None).getAbsolutePath()
        elif platform == 'linux':
            self.root_path = os.path.expanduser('~/Documents')
        elif platform == 'win':
            if 'Desktop' in os.listdir(os.path.expanduser('~')):
                self.root_path = os.path.expanduser('~/Desktop')
            else:
                self.root_path = os.path.expanduser('~/桌面')
        else:
            self.root_path = os.path.dirname(os.path.abspath('.'))

        self.everyday = everyday_pb2.EveryDay()
        self.diary_path = os.path.join(self.root_path, 'diary.txt')
        if os.path.exists(self.diary_path) == False:
            saved_bytes = self.everyday.SerializeToString()
            self.write(saved_bytes)
        else:
            saved_bytes = self.read()
            self.everyday.MergeFromString(saved_bytes)

        super(DiaryApp, self).__init__(**kwargs)

    def read(self):
        with open(self.diary_path, 'rb') as f:
            byte = f.read()
        return byte

    def write(self, byte):
        with open(self.diary_path, 'wb') as f:
            f.write(byte)

    def build(self):
        self.bind(on_start=self.post_build_init)
        return Manager()

    def post_build_init(self, ev):
        from kivy.base import EventLoop
        EventLoop.window.bind(on_keyboard=self.hook_keyboard)

    def hook_keyboard(self, window, key, *largs):
        if key == 27:  # back key
            if self.root.current == 'main':
                exit()
            self.root.current = 'main'
            return True
        """
        elif key == 319 or key == 1073741942: # munu key
            if platform == 'android':
                share_file(self.diary_path)
            return True
        """


DiaryApp().run()
