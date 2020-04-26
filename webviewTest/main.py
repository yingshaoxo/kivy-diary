from data import Data
from flask import Flask, request, send_file
from flask_cors import CORS
import json
from datetime import datetime
import pprint

import base64
import everyday_pb2

#from PIL import Image
import io
import os


try:
    from jnius import autoclass, cast
    PythonActivity = autoclass('org.kivy.android.PythonActivity')
    currentActivity = cast('android.app.Activity', PythonActivity.mActivity)
    context = cast('android.content.Context', currentActivity.getApplicationContext())
    ROOT_PATH = context.getExternalFilesDir(None).getAbsolutePath()
except Exception as e:
    ROOT_PATH = "."


#DEBUG = False
DEBUG = True


def printit(text):
    if DEBUG == False:
        return
    print("\n", '-'*10, "\n")
    print(text)


def show_image(base64_string):
    if DEBUG == False:
        return
    base64_string = base64_string.split(",")[1]
    #im = Image.open(io.BytesIO(base64.b64decode(base64_string)))
    #im.save('image.png', 'PNG')
    # im.show()


my_data = Data(ROOT_PATH)

app = Flask(__name__,
            static_folder='./web-build',
            static_url_path="/ui/"
            )
CORS(app)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")


@app.route('/api/v1/upload', methods=['POST'])
def upload():
    result = {"status": "wrong"}
    request_json = request.get_json()
    if request_json:
        action = request_json.get("action")
        data = request_json.get("data")
        if action and data:
            # printit(data[:30])  # raw data
            data = base64.b64decode(data)  # encoded by our self with our own javascript function
            # printit(data[:30])
            data = base64.decodebytes(data)  # encoded by google protocol
            # printit(data[:30])  # mergeable bytes data for protocol object
            oneday = everyday_pb2.OneDay()
            oneday.MergeFromString(data)
            # printit(oneday.content[0].text)

            if len(oneday.content[0].image):
                base64_image_string = oneday.content[0].image[0]
                # printit(base64_image_string[:30])
                show_image(base64_image_string)

            oneday.date = str(datetime.now())
            my_data.save_a_day(oneday)

            result["status"] = "ok"
    return json.dumps(result)


@app.route('/api/v1/get', methods=['POST'])
def get_today_message():
    request_json = request.get_json()
    return json.dumps(my_data.get_todays_data())


@app.route('/api/v1/search', methods=['POST'])
def search():
    result = {"status": "wrong"}
    request_json = request.get_json()
    if request_json:
        text = request_json.get("text")
        if text:
            result["result"] = my_data._new_data.search(text)
            result["status"] = "ok"
    return json.dumps(result)


@app.route('/api/v1/download', methods=['GET'])
def download_it():
    # return send_file(io.BytesIO(text), as_attachment=True, attachment_filename="yourData.json", mimetype="text/plain")
    return send_file(my_data._new_data.get_database(), as_attachment=True)


if __name__ == "__main__":
    print("http://127.0.0.1:8888/api/v1/download")
    app.run(host="0.0.0.0", port=8888, debug=False)
