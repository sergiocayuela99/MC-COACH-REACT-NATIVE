import React from "react";
//import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//ICONOS
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStackNavigator, ChatStackNavigator, HorarioStackNavigator, PerfilStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: "#FFFFFF",
            activeBackgroundColor: "#FF8C11",
            inactiveTintColor: "#5D6D7E",
            inactiveBackgroundColor: "#FF8C11",
          }}>

            <Tab.Screen
                name="Entrenamiento" 
                component={HomeStackNavigator} 
                options={{
                  title: "Entrenamiento", headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="sports-handball" size={size} color={color} />
                  )
                }}
              />
            <Tab.Screen 
                name="Chat" 
                component={ChatStackNavigator}
                options={{
                  title: "Chat", headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="chat" size={size} color={color} />
                  )
                }}
      
              />
            <Tab.Screen
                name="Horario" 
                component={HorarioStackNavigator}
                options={{
                  title: "Horario", headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="schedule" size={size} color={color} />
                  )
                }}
      
              />
            <Tab.Screen
                name="Perfil" 
                component={PerfilStackNavigator}
                options={{
                  title: "Perfil", headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="schedule" size={size} color={color} />
                  )
                }}
      
              />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;