import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import HorarioScreen from "../screens/HorarioScreen";
import LoginScreen from "../screens/LoginScreen";
import PerfilScreen from "../screens/PerfilScreen";


import BottomTabNavigator from "./TabNavigator";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#FF8C11",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

/*const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerLeft: (props) => null }}  />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}*/

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Entrenamiento personal" component={HomeScreen} options={{ headerLeft: (props) => null }} />
      </Stack.Navigator>
    );
  }

  const ChatStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Chat Gym-MC" component={ChatScreen} options={{ headerLeft: (props) => null }} />
      </Stack.Navigator>
    );
  }

const HorarioStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Horario Gym-MC" component={HorarioScreen} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}

const PerfilStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Perfil Gym-MC" component={PerfilScreen} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export { HomeStackNavigator, ChatStackNavigator, HorarioStackNavigator, PerfilStackNavigator };