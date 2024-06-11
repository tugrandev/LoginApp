import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home';
import Notifications from '../screen/Notifications';
import Profile from '../screen/Profile';
import Settings from '../screen/Settings';
import Wallet from '../screen/Wallet';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("AccessToken");
    navigation.replace("Login"); // Giriş ekranına yönlendirin
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerActiveBackgroundColor: 'gainsboro',
      drawerActiveTintColor: 'purple',
    }} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home!" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Wallet" component={Wallet} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;