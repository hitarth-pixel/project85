import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePost from '../screens/CreatePost'
import Feed from '../screens/Feed'
import {RFValue} from 'react-native-responsive-fontsize'

const Tab=createMaterialBottomTabNavigator()

export default function TabNavigator() {
  return (
    
    <Tab.Navigator
    labeled={false}
    barStyle={{backgroundColor:'green',
               borderTopLeftRadius: 30,
               borderTopRightRadius: 30,
               overFlow:"hidden",
               position:"absolute",
               height:"10%"
               }}
    screenOptions={({route})=>({
      tabBarIcon:({focused,size,color})=>{
        let iconName;
        if(route.name==='CREATEPOST'){
          iconName=focused
          ?'book'
          :'book-outline'
        }else if(route.name==='FEED'){
          iconName=focused
          ?'laptop'
          :'laptop-outline'
        }
        return(
          <Ionicons name={iconName} color={color} size={RFValue(25)} 
          style={{width:RFValue(30),height:RFValue(30)}}/>
        ) 
      }
      })}

    tabBarOptions={{
      activeTintColor:'orange',
    inactiveTintColor:'blue'}}>

    
    
    <Tab.Screen name="FEED" component={Feed} />
    </Tab.Navigator>
    
  );
}

