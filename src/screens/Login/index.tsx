import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
} from 'react-native';

import AuthContext from '../../contexts/auth';
export const Login = () => {
  const {signed, signIn} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    await signIn();
    console.log('respons', signed);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewLogoContainer}>
        <Image
          tintColor={'#000'}
          source={require('../../assets/icons/Icon.png')}
        />
      </View>

      <View style={styles.viewInputs}>
        <Text style={styles.textWelcomeLogin}>Que bom te ver por aqui!</Text>
        <TextInput
          style={styles.inputsRegister}
          placeholderTextColor={'#8C8C8C'}
          placeholder="anamaria@gmail.com"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <TextInput
          style={styles.inputsRegister}
          placeholderTextColor={'#8C8C8C'}
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Pressable onPress={handleSignIn} style={styles.buttonSignInView}>
          <Text style={styles.textButtonSignIn}>Entrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00B8C4',
  },

  viewLogoContainer: {
    height: 106,
    width: 106,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  viewInputs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',

    borderTopLeftRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },

  inputsRegister: {
    width: 350,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    paddingLeft: 18,
    margin: 12,
  },

  buttonSignInView: {
    backgroundColor: '#183E4B',
    width: 350,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 24,
  },

  textButtonSignIn: {
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 21,
  },

  textWelcomeLogin: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 45,
  },
});
