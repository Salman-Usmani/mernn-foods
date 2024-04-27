import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Icon, Color} from '../../themes';
import {widthInDp} from '../../utils';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.mainContainer}>
      <Icon.Ionicons
        name="close"
        size={widthInDp(7)}
        style={styles.iconStyle}
        onPress={() => props.navigation.closeDrawer()}
      />
      <Text style={styles.headerText}>Welcome to MERNN_Foods!</Text>

      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Login"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
        style={styles.loginStyle}
        labelStyle={styles.labelStyle}
        icon={() => (
          <Icon.MaterialIcons
            name="login"
            size={widthInDp(5)}
            color={Color.light}
          />
        )}
      />
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  iconStyle: {
    textAlign: 'right',
  },
  headerText: {textAlign: 'center', fontWeight: 'bold'},
  loginStyle: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
    backgroundColor: Color.dark,
  },
  labelStyle: {
    textAlign: 'center',
    color: Color.light,
  },
});
