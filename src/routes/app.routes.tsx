import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={Home} />
  </AppStack.Navigator>
);

export default AppRoutes;
