import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ChallengeDetailsScreen({ route }) {
  const { challenge } = route.params;
  const [completedFruits, setCompletedFruits] = useState([]);

  const toggleFruitCompletion = (fruit) => {
    if (completedFruits.includes(fruit)) {
      setCompletedFruits(completedFruits.filter((f) => f !== fruit));
    } else {
      setCompletedFruits([...completedFruits, fruit]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{challenge.title}</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.descriptionContainer}>
          <Icon name="info-circle" size={24} color="#1E90FF" />
          <Text style={styles.description}>{challenge.description}</Text>
        </View>
        <View style={styles.fruitsContainer}>
          <Text style={styles.fruitsTitle}>
            <Icon name="apple-alt" size={20} color="#FF4500" /> Recommended
            Fruits
          </Text>
          {challenge.fruits.map((fruit, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fruitItem}
              onPress={() => toggleFruitCompletion(fruit)}
            >
              <Icon
                name={
                  completedFruits.includes(fruit) ? "check-square" : "square"
                }
                size={20}
                color="#32CD32"
              />
              <Text
                style={[
                  styles.fruitText,
                  completedFruits.includes(fruit) && styles.completedFruitText,
                ]}
              >
                {fruit}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>
            <Icon name="lightbulb" size={20} color="#FFD700" /> Tips
          </Text>
          <Text style={styles.tipText}>
            - Make sure to wash your fruits thoroughly before consuming them.
          </Text>
          <Text style={styles.tipText}>
            - Try to buy organic fruits whenever possible for added health
            benefits.
          </Text>
          <Text style={styles.tipText}>
            - Experiment with different fruit combinations to keep things
            interesting.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 80,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    backgroundColor: "#F0F8FF",
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E90FF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "#333",
    marginLeft: 10,
  },
  fruitsContainer: {
    marginBottom: 20,
  },
  fruitsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF4500",
    marginBottom: 10,
  },
  fruitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  fruitText: {
    fontSize: 18,
    color: "#333",
    marginLeft: 10,
  },
  completedFruitText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  tipsContainer: {
    backgroundColor: "#F0FFF0",
    padding: 20,
    borderRadius: 10,
  },
  tipsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  tipText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});
