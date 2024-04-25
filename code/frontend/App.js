import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./navigators/AuthStackNavigator";
import MainTabNavigator from "./navigators/MainTabNavigator";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
        <RootStack.Screen name="MainTab" component={MainTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
