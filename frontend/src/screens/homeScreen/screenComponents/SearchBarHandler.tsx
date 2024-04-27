import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../themes';
import {widthInDp, heightInDp} from '../../../utils';
import {SearchBar} from './SearchBar';

export const SearchBarHandler = () => {
  return (
    <View
      style={{
        backgroundColor: Color.light,
        marginHorizontal: widthInDp(5),
        borderRadius: widthInDp(2),
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '3%',
        // position: 'static',
        padding: widthInDp(3),
        gap: heightInDp(1),
        // top: '5%',
        // ====================
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <Text
        style={{
          color: Color.orange,
          textAlign: 'center',
          fontSize: widthInDp(6),
        }}>
        Tuck into a takeaway today
      </Text>
      <Text>Food is just a click away</Text>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({});
