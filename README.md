# Kivy-Diary
Diary application made it with Kivy. Supports both Python2 and Python3.

#### For testing, run this:

`sudo python3 main.py`

![main](https://github.com/yingshaoxo/kivy-diary/raw/master/screenshots/main.png "main")

![write](https://github.com/yingshaoxo/kivy-diary/raw/master/screenshots/write.png "write")

![read](https://github.com/yingshaoxo/kivy-diary/raw/master/screenshots/read.png "read")

#### For building

##### 0. Example App
```
git clone https://github.com/yingshaoxo/kivy-diary.git
cd kivy-diary
```

##### 1. Prepare your SDK and NDK
Use Android Studio SDK Manager to install it. Here I installed SDK 29 and NDK 21.

##### 2. Pull p4a to local
```
docker pull kivy/python-for-android
```

##### 3. Run it (you need to change the first SDK path)
```
docker run -it --name kivy --volume "$(pwd)":/home/user/host/app --volume /home/yingshaoxo/Android/Sdk:/home/user/host/Android/Sdk kivy/python-for-android
```

##### 4. Active the virtual env
```
source venv/bin/activate && cd ../host/app
```

##### 5. Build it
use `./build.sh` or

```
export ANDROIDSDK="/home/user/host/Android/Sdk"
export ANDROIDNDK="/home/user/host/Android/Sdk/ndk/21.0.6113669"
export ANDROIDAPI="29"  # Target API version of your application
export NDKAPI="21"  # Minimum supported API version of your application

p4a apk --private . --package=xyz.yingshaoxo.kivydiary --name "KivyDiary" --version 0.2 --bootstrap=sdl2 --requirements=python3,kivy,jnius --blacklist-requirements=sqlite3,libffi,openssl --orientation=portrait --add-source . --presplash=./data/flash.png --icon=./data/icon.png --permission INTERNET --permission WRITE_EXTERNAL_STORAGE
```
