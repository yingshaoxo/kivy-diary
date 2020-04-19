import json
import os
from datetime import datetime


class Data():
    def __init__(self):
        self.QZONE_DATA_FILE = "MyQzoneData.json"
        if os.path.exists(self.QZONE_DATA_FILE):
            with open(self.QZONE_DATA_FILE, "r") as f:
                text = f.read()
            self.QZone = json.loads(text)
        else:
            print(f"QZone doesn't exist: {self.QZONE_DATA_FILE}")
            self.QZone = None

        self._today_date = datetime.now().date()
        #self._today_date = datetime.fromisoformat("2020-04-16T04:48:08").date()
        self._update()

    def _update_date(self):
        today_date = datetime.now().date()
        if self._today_date == today_date:
            return
        else:
            self._today_date = today_date

    def _update(self):
        self._update_todays_qzone()
        self._update_todays_twitter()

    def _update_todays_qzone(self):
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
            "qzone": self._todays_qzone,
            "twitter": self._todays_twitter,
        }


if __name__ == "__main__":
    my_data = Data()
    todays_data = my_data.get_todays_data()
    print(todays_data)
