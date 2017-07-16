# FirebaseFacebook

Firebase facebook authentication<br>

The basics...

Setup a facebook app in the facebook developers section.
https://developers.facebook.com/

Setup your firebase app and firebase auth in the firebase console.
https://console.firebase.google.com/

Follow the directions in the Facebook SDK for React-Native
https://developers.facebook.com/docs/react-native

I got numerous errors and issues setting this up, some notes:

https://developers.facebook.com/docs/react-native
react-native init rbFBSDK

#Have to install an older version of the SDK or it wont link
npm install --save react-native-fbsdk@0.6.0
react-native link react-native-fbsdk

#Upgrade to the newer SDK after linking
npm update react-native-fbsdk

#Install firebase
npm install firebase --save

#follow the directions for the iOS or Android in the above link of you will not compile and get all sort of crazy errors.

react-native start
An error... "code":"ENOSPC","errno":"ENOSPC","syscall": watch
Then you need to install watchman...sigh...why is this so challenging...
   #https://stackoverflow.com/questions/33965524/error-while-running-react-native-start
Install Watchman = https://facebook.github.io/watchman/docs/install.html
git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v4.7.0  # the latest stable release
./autogen.sh # of course there is always something....this step yields an error
   #https://medium.com/@vonchristian/how-to-setup-watchman-on-ubuntu-16-04-53196cc0227c
sudo apt-get install -y autoconf automake build-essential python-dev
./autogen.sh # suddenly works
./configure
make
sudo make install
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches  && echo 999999 | sudo tee -a  /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee  -a /proc/sys/fs/inotify/max_user_instances && watchman  shutdown-server

react-native start
react-native run-android

*Optional?
https://www.npmjs.com/package/react-native-fbsdk

code
https://stackoverflow.com/questions/39021165/react-native-firebase-facebook-auth
https://medium.com/@matthewleak/react-native-firebase-authentication-with-fbloginmanager-dd3d18a432c5

![Alt text](images/ShoppingApp.png?raw=true "ScreenShot")
![Alt text](images/ShoppingAppMenu.png?raw=true "ScreenShot")
