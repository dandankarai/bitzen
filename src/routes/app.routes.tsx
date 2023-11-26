import React, {TouchableOpacity, Text} from 'react-native';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPet from '../screens/DetailPet';
import {NewPet} from '../screens/NewPet';

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitleAlign: 'left',
        headerTitle: 'Seus pets',

        headerRight: () => (
          <TouchableOpacity>
            <Text>Novo pet</Text>
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
  </AppStack.Navigator>
);

export default AppRoutes;
