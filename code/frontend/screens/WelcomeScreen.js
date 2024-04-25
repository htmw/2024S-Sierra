import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

export default function WelcomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#1D976C", "#93F9B9"]} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FreshLens</Text>
        <Text style={styles.subtitle}>Know Your Healthy Diet</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.signInButton]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={[styles.buttonText, styles.signInButtonText]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#FFFFFF",
  },
  signInButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  buttonText: {
    color: "#1D976C",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
  },
  signInButtonText: {
    color: "#FFFFFF",
  },
});
