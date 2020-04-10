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

p4a apk --private . --package=xyz.yingshaoxo.kivydiary --name "KivyDiary" --version 0.3 --bootstrap=sdl2 --requirements=python3,kivy,jnius,protobuf --blacklist-requirements=sqlite3,libffi,openssl --window --orientation=portrait --add-source . --presplash=./data/flash.png --icon=./data/icon.png --permission INTERNET --permission WRITE_EXTERNAL_STORAGE --debug
```

##### 6. Sign it
```
apksigner sign --ks yingshaoxo.keystore --out app.apk unnamed_dist_1__armeabi-v7a-release-unsigned-0.3-.apk
```

##### Error handling
After `p4a clean_dist`, the error message you get is:
```
/bin/cp: missing destination file operand after 'libs/armeabi-v7a'
```

How to fix:
```
vim /home/user/app/pythonforandroid/bootstrap.py
```
```
def distribute_libs(self, arch, src_dirs, wildcard='*', dest_dir="libs"):
    '''Copy existing arch libs from build dirs to current dist dir.'''
    info('Copying libs')
    tgt_dir = join(dest_dir, arch.arch)
    ensure_dir(tgt_dir)
    for src_dir in src_dirs:
        libs = glob.glob(join(src_dir, wildcard))
        if libs:
            shprint(sh.cp, '-a', *libs, tgt_dir)
        else:
            debug("No libs found at {}".format(src_dirs))
            debug("We were trying to copy this folders files to {}".format(tgt_dir))
```