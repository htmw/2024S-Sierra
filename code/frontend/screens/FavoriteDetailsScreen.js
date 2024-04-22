import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const FavoriteDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{item.name}</Text>
        </View>
        <View style={styles.nutrientsContainer}>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>Calories:</Text>
            <Text style={styles.nutrientValue}>{item.calories}</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>Protein:</Text>
            <Text style={styles.nutrientValue}>{item.protein}g</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>Carbs:</Text>
            <Text style={styles.nutrientValue}>{item.carbs}g</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>Fat:</Text>
            <Text style={styles.nutrientValue}>{item.fat}g</Text>
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.aboutText}>{item.about}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  header: {
    backgroundColor: "#7F5DF0",
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  nutrientsContainer: {
    marginBottom: 20,
  },
  nutrientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  nutrientLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  nutrientValue: {
    fontSize: 18,
    color: "#666",
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#7F5DF0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FavoriteDetailsScreen;
