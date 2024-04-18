import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import FavoritesStackNavigator from "./navigators/FavoritesStackNavigator";
import CameraStackNavigator from "./navigators/CameraStackNavigator";
import ProfileScreen from "./screens/ProfileScreen";
import AuthScreen from "./screens/AuthScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Auth"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "CameraStack") {
              iconName = focused ? "camera" : "camera-outline";
            } else if (route.name === "FavoritesStack") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size + 5} color={color} />;
          },
          tabBarActiveTintColor: "#7F5DF0",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#ffffff",
          },
        })}
      >
        <Tab.Screen name="Auth" component={AuthScreen} />
        <Tab.Screen name="FavoritesStack" component={FavoritesStackNavigator} />
        <Tab.Screen name="CameraStack" component={CameraStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
