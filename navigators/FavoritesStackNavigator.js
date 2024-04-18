import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import FavoriteDetailsScreen from "../screens/FavoriteDetailsScreen";

const Stack = createStackNavigator();

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoriteDetails"
        component={FavoriteDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
