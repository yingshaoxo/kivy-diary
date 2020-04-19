export ANDROIDSDK="/home/user/host/Android/Sdk"
export ANDROIDNDK="/home/user/host/Android/Sdk/ndk/21.0.6113669"
export ANDROIDAPI="29"  # Target API version of your application
export NDKAPI="21"  # Minimum supported API version of your application

p4a apk --private . --package=xyz.yingshaoxo.kivydiary --name "KivyDiary" --version 0.2 --bootstrap=sdl2 --requirements=python3,kivy,jnius,protobuf --blacklist-requirements=sqlite3,libffi,openssl --orientation=portrait --add-source . --presplash=./data/flash.png --icon=./data/icon.png --permission INTERNET --permission WRITE_EXTERNAL_STORAGE
