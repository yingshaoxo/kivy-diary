export ANDROIDSDK="/home/user/host/Android/Sdk"
export ANDROIDNDK="/home/user/host/Android/Sdk/ndk/21.0.6113669"
export ANDROIDAPI="29"  # Target API version of your application
export NDKAPI="21"  # Minimum supported API version of your application

#p4a clean_builds
#p4a clean_dists
p4a apk --private . --package=org.example.myapp --name "flasktest" --version 0.1 --bootstrap=webview --requirements=python3,flask,flask_cors,protobuf --permission INTERNET --permission WRITE_EXTERNAL_STORAGE --port=8888
