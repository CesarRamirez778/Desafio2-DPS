import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={({color, size }) => (
          <MaterialCommunityIcons
            color={color}
            size={size}
            name='exit-to-app'
          />
        )}
        label="Regresar"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}>

      <Drawer.Screen
        name="Inicio"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-circle"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="peliculas"
        component={Peliculas}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-plus"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="tvSHow"
        component={tvSHow}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              size={24}
              color="black"
            />
          ),
        }}
      />
       <Drawer.Screen
        name="Documentales"
        component={Documentales}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              size={24}
              color="black"
            />
          ),
        }}
      />
       <Drawer.Screen
        name="Series"
        component={Series}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              size={24}
              color="black"
            />
          ),
        }}
      />
     
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
