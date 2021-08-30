import * as React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import LoadingScreen from './screens/loadingScreen';
import LoginScreen from './screens/loggingScreen';
import PostScreen from './screens/PostScreen';
import firebase from 'firebase'
import firebaseConfig from './config';

  const AppNavigator=createSwitchNavigator({
    LoadingScreen:LoadingScreen,
    LoginScreen:LoginScreen,
    PostScreen:PostScreen
  })

  const AppContainer =createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}

