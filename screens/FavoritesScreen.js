import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const favoritesData = [
  {
    id: "1",
    name: "Apple",
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fat: 0.3,
    icon: "apple-alt",
  },
  {
    id: "3",
    name: "Carrot",
    calories: 41,
    protein: 0.9,
    carbs: 9,
    fat: 0.2,
    icon: "carrot",
  },
  {
    id: "4",
    name: "Spinach",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    icon: "leaf",
  },
];

export default function FavoritesScreen() {
  const renderFavoriteItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Icon name={item.icon} size={30} color="#888" style={styles.itemIcon} />
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <View style={styles.itemNutrition}>
        <View style={styles.nutritionItem}>
          <Icon
            name="fire"
            size={14}
            color="#888"
            style={styles.nutritionIcon}
          />
          <Text style={styles.itemNutritionText}>{item.calories}</Text>
        </View>
        <View style={styles.nutritionItem}>
          <Icon
            name="dna"
            size={14}
            color="#888"
            style={styles.nutritionIcon}
          />
          <Text style={styles.itemNutritionText}>{item.protein}g</Text>
        </View>
        <View style={styles.nutritionItem}>
          <Icon
            name="bread-slice"
            size={14}
            color="#888"
            style={styles.nutritionIcon}
          />
          <Text style={styles.itemNutritionText}>{item.carbs}g</Text>
        </View>
        <View style={styles.nutritionItem}>
          <Icon
            name="tint"
            size={14}
            color="#888"
            style={styles.nutritionIcon}
          />
          <Text style={styles.itemNutritionText}>{item.fat}g</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
      </View>
      <FlatList
        data={favoritesData}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  itemDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemIcon: {
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemNutrition: {
    flexDirection: "row",
  },
  nutritionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  nutritionIcon: {
    marginRight: 5,
  },
  itemNutritionText: {
    fontSize: 14,
    color: "#888",
  },
});
