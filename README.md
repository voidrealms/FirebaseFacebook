# FirebaseFacebook

Firebase facebook authentication<br>
<br>
The basics...
<br><br>
Setup a facebook app in the facebook developers section.<br>
https://developers.facebook.com/<br>
<br>
Setup your firebase app and firebase auth in the firebase console.<br>
https://console.firebase.google.com/<br>
<br>
Follow the directions in the Facebook SDK for React-Native<br>
https://developers.facebook.com/docs/react-native<br>
<br>
I got numerous errors and issues setting this up, some notes:<br>
react-native init rbFBSDK<br>
<br>
#Have to install an older version of the SDK or it wont link<br>
npm install --save react-native-fbsdk@0.6.0<br>
react-native link react-native-fbsdk<br>
<br>
#Upgrade to the newer SDK after linking<br>
npm update react-native-fbsdk<br>
<br>
#Install firebase<br>
npm install firebase --save<br>
<br>
#follow the directions for the iOS or Android in the above link of you will not compile and get all sort of crazy errors.
<br><br>
react-native start<br>
An error... "code":"ENOSPC","errno":"ENOSPC","syscall": watch<br>
Then you need to install watchman...sigh...why is this so challenging...<br>
   #https://stackoverflow.com/questions/33965524/error-while-running-react-native-start<br>
Install Watchman = https://facebook.github.io/watchman/docs/install.html<br>
git clone https://github.com/facebook/watchman.git<br>
cd watchman
git checkout v4.7.0  # the latest stable release<br>
./autogen.sh # of course there is always something....this step yields an error<br>
   #https://medium.com/@vonchristian/how-to-setup-watchman-on-ubuntu-16-04-53196cc0227c<br>
sudo apt-get install -y autoconf automake build-essential python-dev<br>
./autogen.sh # suddenly works<br>
./configure<br>
make<br>
sudo make install<br>
#If you skip the next step watchman on linux fails...<br>
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches  && echo 999999 | sudo tee -a  /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee  -a /proc/sys/fs/inotify/max_user_instances && watchman  shutdown-server
<br><br>
react-native start<br>
react-native run-android<br>
<br>
*Optional?<br>
https://www.npmjs.com/package/react-native-fbsdk<br>

code<br>
https://stackoverflow.com/questions/39021165/react-native-firebase-facebook-auth<br>
https://medium.com/@matthewleak/react-native-firebase-authentication-with-fbloginmanager-dd3d18a432c5<br>
<br>
![Alt text](images/FirebaseFB1.png?raw=true "ScreenShot")
![Alt text](images/FirebaseFB2.png?raw=true "ScreenShot")
![Alt text](images/FirebaseFB3.png?raw=true "ScreenShot")
