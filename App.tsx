import React from 'react-native';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Routes from './src/routes';
import {AuthProvider} from './src/contexts/auth';

const queryClient = new QueryClient();
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
