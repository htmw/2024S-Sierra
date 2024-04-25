import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ImageDetailsScreen = ({ route }) => {
  const { imageUri } = route.params;
  const [nutrientsValues, setNutrientsValues] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    predictNutrients();
  }, []);

  const predictNutrients = async () => {
    try {
      const formData = new FormData();
      formData.append("image", {
        uri: imageUri,
        type: "image/jpeg",
        name: "image.jpg",
      });

      const response = await fetch("http://localhost:3000/predict", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await response.json();
      setNutrientsValues(data);
    } catch (error) {
      console.error("Error predicting nutrients:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Camera")}
      >
        <Ionicons name="close-circle" size={32} color="#fff" />
      </TouchableOpacity>
      <Image source={{ uri: imageUri }} style={styles.image} />
      {nutrientsValues ? (
        <ScrollView contentContainerStyle={styles.detailsContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{nutrientsValues.fruit}</Text>
            <Text style={styles.headerConfidence}>
              Model Confidence: {nutrientsValues.accuracy}%
            </Text>
          </View>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.sectionContent}>{nutrientsValues.about}</Text>
          <Text style={styles.sectionTitle}>Nutrition Summary</Text>
          <Text style={styles.nutrientParagraph}>
            Calories: {nutrientsValues.nutrients.calories} kcal{"\n"}
            Protein: {nutrientsValues.nutrients.protein}g{"\n"}
            Carbs: {nutrientsValues.nutrients.carbohydrates}g{"\n"}
            Fat: {nutrientsValues.nutrients.fat}g
          </Text>
        </ScrollView>
      ) : (
        <Text style={styles.scanningText}>Scanning...</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  image: {
    width: "90%",
    height: 400,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 20,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    width: "90%",
  },
  nutrientParagraph: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
  },
  scanningText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  headerConfidence: {
    fontSize: 16,
    color: "#006400",
  },
});

export default ImageDetailsScreen;
