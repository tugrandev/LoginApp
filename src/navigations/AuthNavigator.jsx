import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import DrawerNavigator from './DrawerNavigator';
import { ROUTES } from '../constants';

const Stack = createStackNavigator();

function AuthNavigator() {
  console.log(Stack);
  return ( 
    <Stack.Navigator initialRouteName={ROUTES.LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.SIGNUP} component={SignUpScreen} />
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} />
      
    </Stack.Navigator>
  );
}

export default AuthNavigator;