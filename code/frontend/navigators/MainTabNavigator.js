import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FavoritesStackNavigator from "./FavoritesStackNavigator";
import CameraStackNavigator from "./CameraStackNavigator";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          // Destructure props
          const { name } = route;
          let iconName;

          // Switch statement for better readability
          switch (name) {
            case "CameraStack":
              iconName = focused ? "camera" : "camera-outline";
              break;
            case "FavoritesStack":
              iconName = focused ? "heart" : "heart-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = ""; // Handle default case
          }

          // Return Ionicons component
          return <Ionicons name={iconName} size={size + 5} color={color} />;
        },
        tabBarActiveTintColor: "#7F5DF0",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#ffffff",
        },
      })}
    >
      {/* Consistent naming convention */}
      <Tab.Screen name="FavoritesStack" component={FavoritesStackNavigator} />
      <Tab.Screen name="CameraStack" component={CameraStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
