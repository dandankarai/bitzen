import React, {TouchableOpacity, Text, Image, Alert} from 'react-native';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPet from '../screens/DetailPet';
import {NewPet} from '../screens/NewPet';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Account} from '../screens/Account';

import {Paw} from '../assets/icons/pawTabBar.png';
import {DetailAccount} from '../screens/DetailAccount';

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeXPTO() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pets"
        component={Home}
        options={{
          tabBarActiveTintColor: '#000',
          tabBarStyle: {
            padding: 5,
          },
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/pawTabBar.png')}
              style={{
                width: 24,
                height: 24,
                borderRadius: 8,
                tintColor: '#00B8C4',
              }}
              resizeMethod="resize"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Account}
        options={{
          tabBarActiveTintColor: '#000',
          tabBarStyle: {
            padding: 5,
          },
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/profileTabBar.png')}
              style={{
                width: 24,
                height: 24,
                borderRadius: 8,
                tintColor: '#00B8C4',
              }}
              resizeMethod="resize"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const AppRoutes = () => {
  const {navigate} = useNavigation();
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={HomeXPTO}
        options={{
          headerTitleAlign: 'left',
          headerTitle: '',

          headerRight: () => (
            <TouchableOpacity onPress={() => navigate('NewPet')}>
              <Image source={require('../assets/icons/plus.png')} />
              {/* <Text>Novo pet</Text> */}
            </TouchableOpacity>
          ),
        }}
      />
      <AppStack.Screen
        name="DetailPet"
        component={DetailPet}
        options={{
          headerBackVisible: true,
          headerBackTitleVisible: false,
          headerTitle: '',
        }}
      />

      <AppStack.Screen
        name="NewPet"
        component={NewPet}
        options={{
          headerBackVisible: true,
          headerBackTitleVisible: false,
          headerTitle: '',
        }}
      />

      <AppStack.Screen
        name="DetailAccount"
        options={{headerTitle: 'Meus Dados'}}
        component={DetailAccount}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
