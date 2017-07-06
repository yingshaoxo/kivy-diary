#qpy:kivy
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
            BoxLayout:
                orientation: "horizontal"
                size_hint: (1, 0.6)
                padding: [root.width * 0.09]
                spacing: root.width * 0.08
                Button:
                    text: "cancel"
                    background_normal: 'data/blue.png'
                    on_release: root.cancel_button()
                Button:
                    text: "save"
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
                    text: "last"
                    background_normal: 'data/blue.png'
                    on_release: root.last_button()
                Button:
                    text: "next"
                    background_normal: 'data/green.png'
                    on_release: root.next_button()
""")


class Manager(ScreenManager):

    def __init__(self, **kwargs):
        self.app = App.get_running_app()
        self.special_char = '\n\n' + '——————————————' + '\n\n'
        self.diary = self.app.read()
        self.diary_list = self.split_diary()
        super(Manager, self).__init__(**kwargs)
    
    def split_diary(self):
        if self.diary == '':
            return []
        list_ = self.diary.split(self.special_char)
        return list_
    
    def diary_date(self):
        if self.diary_list:
            return [text.split('\n')[0] for text in self.split_diary()]
        else:
            return []

    def today(self):
        current = time.localtime()
        t = time.strftime('%y年%m月%d日', current)
        #t = time.strftime("%b %d, %y", current)
        if t[:2] != '20':
            t = '20' + t
        return t
        
    def last_diary_day(self):
        if self.diary_list:
            return self.diary_date()[-1]
        else:
            return ''
        
    def text_fmt(self, text):
        return self.today() + '\n' * 3 + text

    def save(self):
        diary = self.app.read()
        text = self.ids.input.text.strip(' \n')
        if text == '':
            return
        if self.today() == self.last_diary_day():
            diary += '\n' * 2
            diary += text
        elif diary == '':
            diary = self.text_fmt(text)
        else:
            diary += self.special_char + self.text_fmt(text)
        self.app.write(diary)
        self.diary = diary
        
    def cancel_button(self):
        self.ids.input.text = ''
        self.current = 'main'   
         
    def save_button(self):
        self.save()
        self.ids.input.text = ''
        self.current = "main"
    
    def read_button(self):
        self.diary_list = self.split_diary()
        print(self.diary_list)
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
        self.base_path =os.path.dirname(os.path.abspath('.'))
        self.diary_path = os.path.join(self.base_path, 'diary.txt')
        if os.path.exists(self.diary_path) == False:
            self.write('')
        super(DiaryApp, self).__init__(**kwargs)
    
    def read(self):
        with open(self.diary_path, 'r') as f:
            text = f.read()
        return text.strip(' \n')
    
    def write(self, text):
        with open(self.diary_path, 'w') as f:
            f.write(text)
            
    def build(self):
        return Manager()


DiaryApp().run()
