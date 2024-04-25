import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Profile} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';

const AuthStack = () => {
  const {Screen, Navigator} = createDrawerNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
