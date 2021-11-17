import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";

const Login = ({ navigation }) => {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function for add a new userEmail and password

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  });

  //function to login in accept login in
  const handleLogIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ flex: 4, backgroundColor: "#dbc995" }}>
      <View style={{ marginTop: 45, flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontFamily: "monospace",
              color: "#9e7911",
              textAlign: "center",
            }}
          >
            {" "}
            Welcome to GraberK
          </Text>
          <Text
            style={{
              fontSize: 35,
              fontFamily: "monospace",
              color: "#9e7911",
            }}
          >
            Online Shop
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", flex: 1 }}>
        {/* Instruction for what user should do */}
        <View style={{ marginTop: 30 }}>
          <Text
            style={{ fontSize: 24, fontFamily: "monospace", color: "black" }}
          >
            Hey Start Shopping,
          </Text>
          <Text
            style={{ fontSize: 24, fontFamily: "monospace", color: "black" }}
          >
            Login now
          </Text>
        </View>
      </View>

      {/* User's email and data */}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.userData}>
          <TextInput
            style={{
              height: 50,
              width: 300,
              backgroundColor: "white",
              fontSize: 20,
              marginBottom: 10,
              borderRadius: 20,
              paddingHorizontal: 15,
            }}
            placeholder={"Email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            style={{
              height: 50,
              width: 300,
              backgroundColor: "white",
              fontSize: 20,
              marginBottom: 10,
              borderRadius: 20,
              paddingHorizontal: 15,
            }}
            placeholder={"Password"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          ></TextInput>
        </View>
        {/* Not a member sign up */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{fontSize: 18 }}>Not a member</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("signup")}}>
            <Text style={{ fontSize: 18, color:"#b50003", marginLeft:20}}> Signup</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Login to the homepage */}
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          onPress={handleLogIn}
          style={styles.loginButton}
        >
          <Text style={{ fontSize: 35, color: "white", padding: 1 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  userData: {
    marginTop: 10,
    alignItems: "center",
  },

  loginButton: {
    backgroundColor: "#4d2e09",
    color: "orange",
    paddingHorizontal: 40,
    marginTop: 28,
    borderColor: "orange",
    borderWidth: 5,
    width: "50%",
    borderRadius: 20,
  },
});

export default Login;

{
  /* <Image
source={yam}
style={{
  width: 310,
  height: 250,
  resizeMode: "stretch",
  borderRadius: 20,
  marginTop: 70,
}}
/> */
}
