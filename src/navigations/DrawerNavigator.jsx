import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home';
import Notifications from '../screen/Notifications';
import Profile from '../screen/Profile';
import Settings from '../screen/Settings';
import Wallet from '../screen/Wallet';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Drawer" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Wallet" component={Wallet} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;