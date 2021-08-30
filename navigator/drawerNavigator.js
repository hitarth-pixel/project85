import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import StackNavigator from './StackNavigator'
import About from '../screens/About'

const Drawer = createDrawerNavigator();

const DrawerNavigator=()=> {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="HOME" component={StackNavigator}/>
    <Drawer.Screen name="ABOUT" component={About}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
