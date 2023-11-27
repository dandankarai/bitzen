import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext} from 'react';
import {Button, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {AuthContext} from '../../contexts';
import SwiperComponent from '../../components/Swiper';
import {ro} from 'date-fns/locale';
export const Account = (props: any) => {
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text>Página de conta</Text>
      <Pressable onPress={handleSignOut}>
        <Text>sair</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  swiperContent: {flexDirection: 'row', height: 350, width: '100%'},
  inputsRegister: {
    width: 350,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    paddingLeft: 18,
    margin: 12,
  },
  insideNameAndTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  infoTextLeftSide: {
    color: '#8C8C8C',
    fontSize: 16,
  },

  infoTextRightSide: {
    color: '#000',
    fontSize: 16,
  },

  descriptionPet: {
    color: '#595959',
    fontSize: 18,
    lineHeight: 24,
  },

  aboutTitle: {
    marginHorizontal: 20,
    color: '#8C8C8C',
    fontSize: 20,
    marginTop: 20,
  },

  aboutPet: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  viewAbout: {
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
    padding: 20,
  },

  containerTextTitle: {
    width: '90%',
    marginTop: 20,
    marginBottom: 20,

    marginHorizontal: 20,
  },

  textInfoTitle: {
    color: '#404040',
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 24,
  },

  viewContentContainer: {
    // height: '90%',
    // flexDirection: 'column',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
  },

  textContentView: {
    borderWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '##E6E6E6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '90%',
    padding: 20,
  },

  textContentTextTitle: {
    fontSize: 18,
    color: '#8C8C8C',
  },

  textContentName: {
    color: '#000',
    fontSize: 18,
  },
});
