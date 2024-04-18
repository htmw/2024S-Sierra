import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "../screens/CameraScreen";
import ImageDetailsScreen from "../screens/ImageDetailsScreen";

const Stack = createStackNavigator();

const CameraStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ImageDetails"
        component={ImageDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CameraStackNavigator;
