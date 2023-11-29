import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Lobby from './lobby';
import Formulario from './formulario';
import Visualiza from './visualiza';
import Perfil from './perfil';

import {
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: 'blue',
        inactiveTintColor: '#4682B4',
      }}
      initialRouteName={Lobby}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Lobby"
        component={Lobby}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Visualiza"
        component={Visualiza}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Formulario"
        component={Formulario}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="form" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: 200, // Defina a largura desejada
    height: 80, // Defina a altura desejada

    backgroundColor: '#4682B4',

    paddingBottom: 11,
    paddingTop: 11,
  },
});
