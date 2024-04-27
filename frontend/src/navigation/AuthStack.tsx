import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Home, Login} from '../screens';
import {Color, Icon} from '../themes';
import {widthInDp} from '../utils';
import CustomDrawer from './component/CustomDrawer';

const AuthStack = () => {
  const {Screen, Navigator} = createDrawerNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={screenProps => ({
        drawerPosition: 'right',
        title: '',
        headerLeft: () => {
          return <Text style={styles.iconStyle}>Mernn_Eats</Text>;
        },
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={() => screenProps.navigation.openDrawer()}>
              <Icon.Ionicons
                name="menu"
                size={widthInDp(10)}
                style={styles.menuStyle}
              />
            </TouchableOpacity>
          );
        },
      })}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  iconStyle: {
    color: Color.orange,
    fontStyle: 'italic',
    fontSize: widthInDp(5),
    marginHorizontal: widthInDp(5),
  },
  menuStyle: {paddingHorizontal: widthInDp(4)},
});
