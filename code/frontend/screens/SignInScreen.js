// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Alert,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import {
//   useFonts,
//   Montserrat_500Medium,
//   Montserrat_600SemiBold,
// } from "@expo-google-fonts/montserrat";
// import { auth } from "../service/firebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";

// export default function SignInScreen({ navigation }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [fontsLoaded] = useFonts({
//     Montserrat_500Medium,
//     Montserrat_600SemiBold,
//   });

//   const handleSignIn = async () => {
//     try {
//       const fullUsername = `${username}@freshlens.com`;
//       await signInWithEmailAndPassword(auth, fullUsername, password);
//       console.log("User signed in!");

//       // Show success alert
//       Alert.alert(
//         "Success",
//         "You have successfully signed in!",
//         [
//           {
//             text: "OK",
//             onPress: () => {
//               navigation.navigate("MainTab", { screen: "CameraStack" });
//             },
//           },
//         ],
//         { cancelable: false },
//       );
//     } catch (error) {
//       console.error(error);

//       // Show error alert
//       Alert.alert(
//         "Error",
//         "An error occurred while signing in. Please try again.",
//         [{ text: "OK" }],
//         { cancelable: false },
//       );
//     }
//   };

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <LinearGradient colors={["#1D976C", "#93F9B9"]} style={styles.gradient}>
//           <Text style={styles.title}>Sign In</Text>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Username"
//               value={username}
//               onChangeText={setUsername}
//               autoCapitalize="none"
//               keyboardType="email-address"
//               placeholderTextColor={username ? "#000000" : "#FFFFFF80"}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//               placeholderTextColor={password ? "#000000" : "#FFFFFF80"}
//             />
//           </View>
//           <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//             <Text style={styles.buttonText}>Sign In</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//             <Text style={styles.signUpText}>Not registered? Sign Up</Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   gradient: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 30,
//     color: "#FFFFFF",
//     fontFamily: "Montserrat_600SemiBold",
//   },
//   inputContainer: {
//     width: "100%",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#FFFFFF40",
//     borderRadius: 10,
//     marginBottom: 15,
//     paddingHorizontal: 15,
//     color: "#FFFFFF",
//     fontFamily: "Montserrat_500Medium",
//   },
//   button: {
//     backgroundColor: "#FFFFFF",
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 30,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: "#1D976C",
//     fontWeight: "bold",
//     fontSize: 18,
//     fontFamily: "Montserrat_600SemiBold",
//   },
//   signUpText: {
//     color: "#FFFFFF",
//     fontFamily: "Montserrat_500Medium",
//     marginTop: 20,
//     textDecorationLine: "underline",
//   },
// });






// Importing necessary React and React Native components
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { auth } from "../service/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignInScreen({ navigation }) {
  // Renamed variables
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  const handleSignIn = async () => {
    try {
      const fullUserName = `${userName}@freshlens.com`;
      await signInWithEmailAndPassword(auth, fullUserName, userPassword);
      console.log("User signed in!");

      Alert.alert(
        "Success",
        "You have successfully signed in!",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("MainTab", { screen: "CameraStack" });
            },
          },
        ],
        { cancelable: false },
      );
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        "An error occurred while signing in. Please try again.",
        [{ text: "OK" }],
        { cancelable: false },
      );
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={["#1D976C", "#93F9B9"]} style={styles.gradient}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={userName}
              onChangeText={setUserName}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor={userName ? "#000000" : "#FFFFFF80"}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={userPassword}
              onChangeText={setUserPassword}
              placeholderTextColor={userPassword ? "#000000" : "#FFFFFF80"}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>Not registered? Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

// StyleSheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#FFFFFF",
    fontFamily: "Montserrat_600SemiBold",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF40",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: "#FFFFFF",
    fontFamily: "Montserrat_500Medium",
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: "#1D976C",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
  },
  signUpText: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_500Medium",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
