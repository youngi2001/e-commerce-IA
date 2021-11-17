import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import "firebase/firestore";
import { auth } from "../firebase";
import { useState, useEffect } from "react";


const signup = ({ navigation }) => {
    //function to take the users details
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //function needed tp clear all the users information
  const emptyUserDetails =()=>{
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
  };

  //function to ensure the form is not empty
  const handleForm = () => {
    if (!email) {
      alert("Email is Required");
    } else if (!firstName) {
      alert("First Name is required");
    } else if (!lastName) {
      alert("Last Name is required");
    } else if (!password) {
      alert("Password is required");
    } else if (confirmPassword !== password) {
      alert("Password Mismatched");
    } else {
      emailRegistration();
      navigation.replace("Login");
      emptyUserDetails();
    }
  };

  //function for email registration
  const emailRegistration = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with", user.email);
      })
      .catch((error) => alert(error.message));
  };

  //function for creating a table in firebase and storing user Data such as name, and email

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text style={styles.signupText}> Welcome to the Signup page</Text>
        <Text style={{ fontSize: 18, marginTop: 50 }}>
          Please fill this form to create an account!
        </Text>
      </View>

      {/* collect user details */}
      {/* <KeyboardAvoidingView style={{ flex: 4 }} behavior="padding" keyboardVerticalOffset={0}> */}
      <View style={{ flex: 4 }}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <TextInput
            style={styles.firstName}
            value={firstName}
            placeholder={"First Name"}
            onChangeText={(text) => {
              setFirstName(text);
            }}
          />
          <TextInput
            style={styles.lastName}
            value={lastName}
            placeholder={"Last Name"}
            onChangeText={(text) => {
              setLastName(text);
            }}
          />
        </View>
        <View>
          <TextInput
            style={styles.email}
            value={email}
            placeholder={"Email"}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            style={styles.password}
            value={password}
            placeholder={"Password"}
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry
          />
          <TextInput
            style={styles.password}
            value={confirmPassword}
            placeholder={"Confirm Password"}
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.signUp} onPress={handleForm}>
          <Text style={{ fontSize: 30, color: "white" }}>Signup</Text>
        </TouchableOpacity>
      </View>
      {/* </KeyboardAvoidingView> */}
      <View style={{}}></View>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: "#dbc995",
    alignItems: "center",
  },
  signupText: {
    fontSize: 28,
    marginBottom: 15,
    borderRadius: 5,
    marginHorizontal: 2,
    fontWeight: "bold",
  },
  firstName: {
    height: 50,
    width: "47%",
    padding: 5,
    fontSize: 20,
    borderRadius: 5,
    marginLeft: "1%",
    backgroundColor: "white",
  },
  lastName: {
    height: 50,
    width: "47%",
    padding: 5,
    fontSize: 20,
    borderRadius: 5,
    marginLeft: "1%",
    backgroundColor: "white",
  },
  email: {
    height: 50,
    width: "96%",
    borderRadius: 5,
    padding: 5,
    fontSize: 20,
    backgroundColor: "white",
    marginLeft: "1%",
    marginBottom: 20,
  },
  password: {
    height: 50,
    width: "96%",
    borderRadius: 5,
    padding: 5,
    fontSize: 20,
    marginBottom: 20,
    marginLeft: "1%",
    backgroundColor: "white",
  },
  signUp: {
    backgroundColor: "#4d2e09",
    color: "orange",
    marginTop: "4%",
    paddingHorizontal: 40,
    alignItems: "center",
    marginHorizontal: 70,
    width: "56%",
    paddingVertical: 5,
    borderColor: "orange",
    borderWidth: 5,
    borderRadius: 20,
  },
});
