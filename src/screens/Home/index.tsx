import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext} from 'react';
import {Button, View, Text} from 'react-native';
import {AuthContext} from '../../contexts';

export default function Home({navigation}: any) {
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}
