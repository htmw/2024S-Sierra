import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710201600&semt=ais",
          }}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>Rocky</Text>
        <Text style={styles.bio}>Fitness Enthusiast | Food Lover</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Icon name="fire" size={20} color="#888" />
            <Text style={styles.statValue}>1,500</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="dumbbell" size={20} color="#888" />
            <Text style={styles.statValue}>75</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="utensils" size={20} color="#888" />
            <Text style={styles.statValue}>250</Text>
            <Text style={styles.statLabel}>Meals</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#888",
  },
});
