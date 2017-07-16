/*
https://developers.facebook.com/docs/react-native
react-native init rbFBSDK
npm install --save react-native-fbsdk@0.6.0
react-native link react-native-fbsdk
npm update react-native-fbsdk
npm install firebase --save
*follow the directions for the iOS or Android in the above link

react-native start
An error... "code":"ENOSPC","errno":"ENOSPC","syscall": watch
Then you need to install watchman...
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
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

//Firebase

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "your info here",
  authDomain: "your info here",
  databaseURL: "your info here",
  projectId: "your info here",
  storageBucket: "your info here",
  messagingSenderId: "your info here"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Facebook
import { LoginButton,AccessToken, LoginManager } from 'react-native-fbsdk';

export default class rbFBSDK extends Component {

  onLogin = () => {
    console.log("Login")

    // ... somewhere in your login screen component
    LoginManager
      .logInWithReadPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          return Promise.resolve('cancelled');
        }
        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
        // get the access token
        return AccessToken.getCurrentAccessToken();
      })
      .then(data => {
        // create a new firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

        // login with credential
        return firebase.auth().signInWithCredential(credential);
      })
      .then((currentUser) => {
        if (currentUser === 'cancelled') {
          console.log('Login cancelled');
        } else {
          // now signed in
          console.warn(JSON.stringify(currentUser.toJSON()));
        }
      })
      .catch((error) => {
        console.log(`Login fail with error: ${error}`);
      });

  }

  onLogout = () => {
    console.log("Logout")
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("Logged out");
    }).catch(function(error) {
      // An error happened.
      console.log("Could not log out: " + error)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Facebook SDK
        </Text>
        <View style={styles.buttonContainer}>
        <Button onPress={this.onLogin} title="Login" />
        <Button onPress={this.onLogout} title="Logout" />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 6,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 6,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rbFBSDK', () => rbFBSDK);
