import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase'
import {firebaseConfig} from '../config'

export default function LoginScreen() {

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (
              providerData[i].providerId ===
                firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.getBasicProfile().getId()
            ) {
              
              return true;
            }
          }
        }
        return false;
      };

      onSignIn=(googleUser)=>{
            var unsubscribe=firebase.auth().onAuthStateChanged((firebaseUser)=>{
                unsubscribe();
                if(isUserEqual(googleUser,firebaseUser)){
                    var credential=firebase.auth.GoogleAuthProvider.credential(
                        googleUser.idToken,
                        googleUser.accessToken
                    );
                firebase.auth().signInWithCrential(credential).then(function(result){
                    if(result.addtionalUserInfo.isNewUser){
                        firebase.database().ref('/users/'+result.userId)
                        .set({
                            gmail: result.user.email,
                            profile_picture: result.additionalUserInfo.profile.picture,
                            locale: result.additionalUserInfo.profile.locale,
                            first_name: result.additionalUserInfo.profile.given_name,
                            last_name: result.additionalUserInfo.profile.family_name,
                            current_theme: 'dark',
                          })
                          .then(function (snapshot) {});
                    }
                }).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                  });
              } else {
                console.log('User already signed-in Firebase.');
              }
            });
          };
                
           

      

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      behavior:"web",
      androidClientId: "367580340975-2su1p7g9ucd11spi9o2t96ocjruocpuj.apps.googleusercontent.com",
      iosClientId: "367580340975-se46f58o3cqr7q6dhvrnvbi9mumecm80.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
        this.onSignIn(result)
        this.props.navigation.navigate('DashBoardScreen')
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

  return (
    <View>
    <Button
          title="Sign in with Google"
          onPress={() => this.signInWithGoogleAsync()}></Button>
    </View>
  );
}