import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {hero, landing} from '../../assets';
import {heightInDp, widthInDp} from '../../utils';
import {Color} from '../../themes';
import {SearchBarHandler} from './screenComponents/SearchBarHandler';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: Color.white, flex: 1}}>
      <ScrollView>
        <Image
          source={hero}
          style={{
            height: heightInDp(30),
            width: widthInDp(100),
            borderWidth: 0.5,
          }}
        />
        <View style={{flex: 1}}>
          <SearchBarHandler />
          <Image
            source={landing}
            style={{
              height: heightInDp(30),
              width: widthInDp(100),
              borderWidth: 0.5,
            }}
          />
        </View>
        <Text>HOME</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
