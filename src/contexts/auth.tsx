import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services';
import {api} from '../api';
import {useNavigation} from '@react-navigation/native';

interface AuthContextProps {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
  register(): (credentials: RegisterProps) => Promise<void>;
}
interface RegisterProps {
  name: string;
  document: string;
  email: string;
  phone: string;
  password: string;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState<object | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
      }
    }
    loadStorageData();
  }, []);

  async function register(credentials: RegisterProps) {
    try {
      const response = api.post('/register', credentials);

      setUser({...credentials});
      navigation.navigate('Home');
    } catch (error) {
      console.log('Error in Register');
    }
  }

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
    const storageUser = await AsyncStorage.setItem(
      '@RNAuth:user',
      JSON.stringify(response.user),
    );
    const storageToken = await AsyncStorage.setItem(
      '@RNAuth:token',
      response.token,
    );
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn, signOut, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
