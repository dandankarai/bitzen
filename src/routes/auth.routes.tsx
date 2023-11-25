import {SignUp} from '../screens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
    />

    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
