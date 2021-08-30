import * as React from 'react';
import {  View,ActivityIndicator } from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends React.Component {


    toCheckUserLoggedIn=()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate('DashBoardScreen')
            } else{ this.props.navigation.navigate('LoggingScreen')}
        })
    }

    componentDidMount(){
        this.toCheckUserLoggedIn()
    }

 render(){
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}>
    <ActivityIndicator size="large"/>
    </View>
  );
}
}