import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services';

interface AuthContextProps {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState<object | null>(null);

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
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
