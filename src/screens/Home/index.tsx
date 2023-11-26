import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext} from 'react';
import {Button, View, Text, StyleSheet, FlatList} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {AuthContext} from '../../contexts';
import New from '../../components/New';
import {useNavigation} from '@react-navigation/native';
export default function Home() {
  const navigation = useNavigation();
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Pesqusar um pet"
            style={styles.textInputSearchPet}
            placeholderTextColor={'#B3B3B3'}
          />
        </View>
      </View>

      <View style={{padding: 15}}>
        <New
          cover={require('../../assets/icons/cat1.png')}
          onPress={() => navigation.navigate('DetailPet')}
          name="Leona"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },

  inputArea: {
    paddingHorizontal: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '98%',
    height: 48,
    borderRadius: 10,
  },

  textInputSearchPet: {
    fontSize: 14,
    width: '90%',
  },
});
