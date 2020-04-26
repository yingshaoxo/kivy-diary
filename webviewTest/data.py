import json
import os
from datetime import datetime
import sqlite3
import base64
import re

import everyday_pb2


class Data():
    def __init__(self, root_path):
        self._root_path = root_path

        self.SQL = None
        self.QZone = None

        self._todays_sql = None
        self._todays_qzone = []
        self._todays_twitter = []

        self._initialize_SQL()
        self._initialize_QZone()

        self._today_date = datetime.now().date()
        self._update()

        self._new_data = NewData(root_path)

    def _initialize_SQL(self):
        self.SQL_DATA_FILE = os.path.join(self._root_path, "everyday.db")
        if not os.path.exists(self.SQL_DATA_FILE):
            print(f"SQL doesn't exist: {self.SQL_DATA_FILE}")
            print(f"We'll create a new one!")
            self.SQL = None
        self._sql_conn = sqlite3.connect(self.SQL_DATA_FILE, check_same_thread=False)
        self._sql_cursor = self._sql_conn.cursor()
        self._sql_cursor.execute('''CREATE TABLE IF NOT EXISTS thoughts
                     (date TEXT, data BLOB)''')
        self.SQL = self._sql_cursor

    def _initialize_QZone(self):
        self.QZONE_DATA_FILE = os.path.join(self._root_path, "MyQzoneData.json")
        if os.path.exists(self.QZONE_DATA_FILE):
            with open(self.QZONE_DATA_FILE, "r") as f:
                text = f.read()
            self.QZone = json.loads(text)
        else:
            print(f"QZone doesn't exist: {self.QZONE_DATA_FILE}")
            self.QZone = None

    def _update_date(self):
        today_date = datetime.now().date()
        if self._today_date == today_date:
            return
        else:
            self._today_date = today_date

    def _update(self):
        self._update_todays_sql()
        self._update_todays_qzone()
        self._update_todays_twitter()

    def _update_todays_sql(self):
        if self.SQL:
            days = []
            for row in self.SQL.execute('SELECT * FROM thoughts ORDER BY date'):
                that_day_date = datetime.fromisoformat(row[0]).date()
                if that_day_date == self._today_date:
                    day = everyday_pb2.OneDay()
                    day.MergeFromString(row[1])
                    days.append(day)
            if days:
                days.reverse()
                everyday = everyday_pb2.EveryDay()
                everyday.oneday.extend(days)
                bytes_data = everyday.SerializeToString()
                base64_string = base64.encodebytes(bytes_data)
                self._todays_sql = base64_string.decode("ascii")

    def _update_todays_qzone(self):
        if self.QZone:
            days = []
            for oneday in self.QZone:
                that_day_date = datetime.fromisoformat(oneday["date"]).date()
                if that_day_date == self._today_date:
                    days.append(oneday)
            self._todays_qzone = days

    def _update_todays_twitter(self):
        self._todays_twitter = []

    def get_todays_data(self):
        self._update_date()
        return {
            "sql": self._todays_sql,
            "qzone": self._todays_qzone,
            "twitter": self._todays_twitter,
        }

    def _parse_oneday(self, oneday):
        date = oneday.date
        type = "mine"
        try:
            text = oneday.content[0].text
        except Exception as e:
            print(e)
            text = ""
        images = []
        for image in oneday.content[0].image:
            images.append(image)
        images = json.dumps(images)
        #print(date, type, text)
        # print(str(images)[:30])
        return (date, type, text, images)

    def save_a_day(self, newday):
        self._new_data.save_a_day(*self._parse_oneday(newday))
        self.SQL.execute("INSERT INTO thoughts VALUES (?,?)", (newday.date, newday.SerializeToString()))
        self._sql_conn.commit()
        self._update_todays_sql()


class NewData():
    def __init__(self, root_path):
        self._root_path = root_path
        self.SQL = None
        self._initialize_SQL()

    def _initialize_SQL(self):
        self.SQL_DATA_FILE = os.path.join(self._root_path, "yourdata.db")
        if not os.path.exists(self.SQL_DATA_FILE):
            print(f"SQL doesn't exist: {self.SQL_DATA_FILE}")
            print(f"We'll create a new one!")
            self.SQL = None
        self._sql_conn = sqlite3.connect(self.SQL_DATA_FILE, check_same_thread=False)

        def regular_expression(expr, item):
            reg = re.compile(expr, flags=re.DOTALL)
            return reg.search(item) is not None
        self._sql_conn.create_function("REGEXP", 2, regular_expression)  # 2 here means two parameters. REGEXP is a fixed value

        self._sql_cursor = self._sql_conn.cursor()
        self._sql_cursor.execute('''CREATE TABLE IF NOT EXISTS thoughts
                    (date TEXT, type TEXT, text TEXT, images TEXT)''')
        self.SQL = self._sql_cursor

    def _iterate_database(self):
        if self.SQL:
            for row in self.SQL.execute('SELECT * FROM thoughts ORDER BY date'):
                print(row)

    def save_a_day(self, date, type, text, images):
        status = False
        if isinstance(date, str):
            if isinstance(type, str):
                if isinstance(text, str):
                    if isinstance(images, str):
                        self.SQL.execute("INSERT INTO thoughts VALUES (?,?,?,?)",
                                         (date, type, text, images)
                                         )
                        self._sql_conn.commit()
                        status = True
        return status

    def search(self, text):
        days = []
        for row in self._sql_cursor.execute('SELECT * FROM thoughts WHERE text REGEXP (?)', [r'[\s\S.]*'+text+'[\s\S.]*']):
            days.append({
                "date": row[0],
                "type": row[1],
                "text": row[2],
                "images": json.loads(row[3]),
            })
        days.reverse()
        return days

    def get_database(self):
        return self.SQL_DATA_FILE


if __name__ == "__main__":
    # test1
    """
    my_data = Data(".")
    todays_data = my_data.get_todays_data()
    print(todays_data)
    """
    # test2
    my_data = NewData(".")
    my_data.save_a_day("28.22", "qzone", "dddddhhhhhhhhi", "[]")
    my_data._iterate_database()
    path = my_data.get_database()
    print(path)
