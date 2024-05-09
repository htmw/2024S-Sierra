// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export default function FavoritesScreen() {
//   const [favoritesData, setFavoritesData] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchFavoritesData();
//   }, []);

//   const fetchFavoritesData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/predict");
//       const data = await response.json();
//       setFavoritesData(data);
//     } catch (error) {
//       console.error("Error fetching favorites data:", error);
//     }
//   };

//   const renderFavoriteItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.itemContainer}
//       onPress={() => navigation.navigate("FavoriteDetails", { item })}
//     >
//       <View style={styles.itemDetails}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <View style={styles.itemNutrition}>
//           <View style={styles.nutritionItem}>
//             <Text style={styles.itemNutritionLabel}>Calories:</Text>
//             <Text style={styles.itemNutritionText}>{item.calories}</Text>
//           </View>
//           <View style={styles.nutritionItem}>
//             <Text style={styles.itemNutritionLabel}>Protein:</Text>
//             <Text style={styles.itemNutritionText}>{item.protein}g</Text>
//           </View>
//           <View style={styles.nutritionItem}>
//             <Text style={styles.itemNutritionLabel}>Carbs:</Text>
//             <Text style={styles.itemNutritionText}>{item.carbs}g</Text>
//           </View>
//           <View style={styles.nutritionItem}>
//             <Text style={styles.itemNutritionLabel}>Fat:</Text>
//             <Text style={styles.itemNutritionText}>{item.fat}g</Text>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Favorites</Text>
//       </View>
//       <FlatList
//         data={favoritesData}
//         renderItem={renderFavoriteItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.content}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 60,
//     justifyContent: "center",
//     alignItems: "flex-start",
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   content: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   itemContainer: {
//     marginBottom: 30,
//   },
//   itemDetails: {
//     alignItems: "flex-start",
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   itemNutrition: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   nutritionItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 20,
//     marginBottom: 5,
//   },
//   itemNutritionLabel: {
//     fontSize: 14,
//     color: "#888",
//     marginRight: 5,
//   },
//   itemNutritionText: {
//     fontSize: 14,
//     color: "#888",
//   },
// });






import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Fetching and displaying favorite food items in a FlatList
export default function FavoritesScreen() {
  // State to hold the list of favorite items
  const [favoritesData, setFavoritesData] = useState([]);
  const navigation = useNavigation();

  // Fetch data when component mounts
  useEffect(() => {
    fetchFavoritesData();
  }, []);

  // Fetching favorites data from the API
  const fetchFavoritesData = async () => {
    try {
      const response = await fetch("http://localhost:3000/predict");
      const data = await response.json();
      setFavoritesData(data);
    } catch (error) {
      console.error("Error fetching favorites data:", error);
    }
  };

  // Renders each favorite item in the list
  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("FavoriteDetails", { item })}
    >
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemNutrition}>
          {/* Nutritional information */}
          {renderNutritionItem("Calories:", item.calories)}
          {renderNutritionItem("Protein:", `${item.protein}g`)}
          {renderNutritionItem("Carbs:", `${item.carbs}g`)}
          {renderNutritionItem("Fat:", `${item.fat}g`)}
        </View>
      </View>
    </TouchableOpacity>
  );

  // Function to render a nutrition item with a consistent style
  const renderNutritionItem = (label, value) => (
    <View style={styles.nutritionItem}>
      <Text style={styles.itemNutritionLabel}>{label}</Text>
      <Text style={styles.itemNutritionText}>{value}</Text>
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
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
}

// StyleSheet for consistent design
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
    marginBottom: 30,
  },
  itemDetails: {
    alignItems: "flex-start",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemNutrition: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  nutritionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 5,
  },
  itemNutritionLabel: {
    fontSize: 14,
    color: "#888",
    marginRight: 5,
  },
  itemNutritionText: {
    fontSize: 14,
    color: "#888",
  },
});
