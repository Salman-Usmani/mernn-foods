import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color, Icon} from '../../../themes';
import {heightInDp, widthInDp} from '../../../utils';

export const SearchBar = () => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: widthInDp(2),
        borderRadius: widthInDp(5),
      }}>
      <Icon.Ionicons name="search" size={widthInDp(5)} color={Color.orange} />

      <TextInput
        placeholder="Search by City or Town"
        placeholderTextColor={Color.dark}
        multiline
        style={{flex: 1}}
      />

      <TouchableOpacity
        style={{
          backgroundColor: Color.orange,
          paddingHorizontal: widthInDp(5),
          paddingVertical: heightInDp(1),
          borderRadius: widthInDp(5),
        }}>
        <Text style={{color: Color.white}}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
