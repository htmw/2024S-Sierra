import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { auth, db } from "../service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function ProfileScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = auth.currentUser.uid;
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUser(userSnap.data());
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return null;
  }

  const { name, username, age, profileImage } = user;
  const displayName = `${name} (${username})`;
  const profilePicture = profileImage
    ? { uri: profileImage }
    : require("../assets/image1.webp");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.content}>
        <Image source={profilePicture} style={styles.profilePicture} />
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.age}>Age: {age}</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Icon name="fire" size={24} color="#FF4500" />
            <Text style={styles.statValue}>1,500</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="dumbbell" size={24} color="#4169E1" />
            <Text style={styles.statValue}>75</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="utensils" size={24} color="#32CD32" />
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#87CEFA",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  age: {
    fontSize: 20,
    color: "#666",
    marginBottom: 30,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 30,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  statLabel: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
  },
});
