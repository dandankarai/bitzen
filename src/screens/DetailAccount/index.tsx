import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext} from 'react';
import {Button, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {AuthContext} from '../../contexts';
import SwiperComponent from '../../components/Swiper';
import {ro} from 'date-fns/locale';
import {useNavigation} from '@react-navigation/native';
export const DetailAccount = () => {
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image source={require('../../assets/icons/Avatar.png')} />
      </View>

      <View style={styles.viewContent}>
        <View style={styles.rowInfos}>
          <Text style={styles.textTitleRowInfos}>Nome</Text>
          <Text style={{fontSize: 16}}>Ana Maria Lima</Text>
        </View>

        <View style={styles.rowInfos}>
          <Text style={styles.textTitleRowInfos}>Email</Text>
          <Text style={{fontSize: 16}}>anamaria@email.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  viewImage: {
    marginVertical: 40,
    alignItems: 'center',
  },

  viewContent: {
    flexDirection: 'column',
    width: '100%',
    // backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },

  rowInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  textTitleRowInfos: {
    color: '#8C8C8C',
    fontSize: 16,
    lineHeight: 24,
  },
});
