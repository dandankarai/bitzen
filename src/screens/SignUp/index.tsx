import React, {useState, useContext} from 'react';
import AuthContext from '../../contexts/auth';
import {signIn} from '../../services';

import {
  View,
  Text,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const SignUp = () => {
  const {signed, signIn} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const {navigate} = useNavigation();

  async function handleSignIn() {
    await signIn();
    console.log('respons', signed);
  }

  function handleLogin() {
    navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textRegister}>Cadastre-se gratuitamente</Text>
      <View style={styles.viewInputs}>
        <TextInput
          style={styles.inputsRegister}
          placeholderTextColor={'#8C8C8C'}
          placeholder="Seu nome *"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <TextInput
          style={styles.inputsRegister}
          placeholderTextColor={'#8C8C8C'}
          placeholder="CPF *"
          value={document}
          onChange={e => setDocument(e.target.value)}
        />

        <TextInput
          style={styles.inputsRegister}
          placeholderTextColor={'#8C8C8C'}
          placeholder="E-mail *"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <TextInput
          style={styles.inputsRegister}
          placeholderTextColor={'#8C8C8C'}
          placeholder="Telefone *"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />

        <TextInput
          style={styles.inputsRegister}
          placeholderTextColor={'#8C8C8C'}
          placeholder="Senha *"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <TextInput
          style={styles.inputsRegister}
          placeholderTextColor={'#8C8C8C'}
          placeholder="Confirmar senha *"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </View>

      <Pressable onPress={handleSignIn} style={styles.buttonCreateAccount}>
        <Text style={styles.textButtonCreateAccount}>Criar conta</Text>
      </Pressable>

      <Text style={{color: '#737373'}}>ou se cadastre com </Text>

      <View style={styles.viewEnter}>
        <Text>Já possui uma conta? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  viewInputs: {
    display: 'flex',
  },
  textRegister: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 20,
    fontFamily: 'Poppins ',
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
  viewEnter: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonCreateAccount: {
    backgroundColor: '#183E4B',
    width: 350,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
  textButtonCreateAccount: {
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 21,
  },
});
