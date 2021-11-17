import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";

const Checkout = () => {
  //function to take the users details
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");



  const confirmPayment = () =>
  Alert.alert(
    'Payment Made',
    'You have successfully made payment for all products in your Cart',
    [
      {
        text: 'Done',
        onPress: () => Alert.alert('Thanks for Shopping with Graberk Online Shop See you later'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert('Payment Unsuccessful after not tapping Done for final confirmation'),
    }
  );

  const handlePayment = () => {
    if (!email) {
      alert("Email is Required");
    } else if (!fullName) {
      alert("First Name is required");
    } else if (!address) {
      alert("Password is required");
    } else if (!phone) {
      alert("Password Mismatched");
    } else { 
        confirmPayment();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.checkoutText}> Checkout Page</Text>
      <View style={{ flex: 4, justifyContent:"center" }}>
        
        <View>
        <TextInput
            style={styles.phone}
            value={fullName}
            placeholder={"Full Name"}
            onChangeText={(text) => {
              setFullName(text);
            }}
          />
          <TextInput
            style={styles.email}
            value={email}
            placeholder={"Email"}
            onChangeText={(text) => {
              setEmail(text);
            }}
            keyboardType={"email-address"}
          />
          <TextInput
            style={styles.address}
            value={address}
            placeholder={"Address"}
            onChangeText={(text) => {
              setAddress(text);
            }}
            
          />
          <TextInput
            style={styles.phone}
            value={phone}
            placeholder={"Phone Number"}
            onChangeText={(text) => {
              setPhone(text);
            }}
            keyboardType={"numeric"}
          />
        </View>
        <TouchableOpacity style={styles.makePayment} onPress={handlePayment}>
          <Text style={{ fontSize: 30, color: "white" }}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: "#2cc992",
    alignItems: "center",
  },
  checkoutText: {
    fontSize: 30,
    marginBottom: 15,
    borderRadius: 5,
    marginTop:30,
    color:"green",
    textAlign:"center",
    marginHorizontal: 2,
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
  address: {
    height: 50,
    width: "96%",
    borderRadius: 5,
    padding: 5,
    fontSize: 20,
    marginBottom: 20,
    marginLeft: "1%",
    backgroundColor: "white",
  },
  phone: {
    height: 50,
    width: "96%",
    borderRadius: 5,
    padding: 5,
    fontSize: 20,
    marginBottom: 20,
    marginLeft: "1%",
    backgroundColor: "white",
  },
  makePayment: {
    backgroundColor: "#054d33",
    color: "orange",
    marginTop: "10%",
    paddingHorizontal: 40,
    alignItems: "center",
    marginTop:54,
    marginHorizontal: 20,
    width: "86%",
    paddingVertical: 5,
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 20,
  },
});
