import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";

const Checkout = () => {
  //function to take the users details
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  //function needed tp clear all the users information
  const emptyUserDetails = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhone("");
  };

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
    } else if (!firstName) {
      alert("First Name is required");
    } else if (!lastName) {
      alert("Last Name is required");
    } else if (!address) {
      alert("Password is required");
    } else if (!phone) {
      alert("Password Mismatched");
    } else { 
        
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.checkoutText}> This is the checkout page</Text>
      <View style={{ flex: 4, justifyContent:"center" }}>
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
            placeholder={"Phone"}
            onChangeText={(text) => {
              setPhone(text);
            }}
            
          />
        </View>
        <TouchableOpacity style={styles.makePayment} onPress={confirmPayment}>
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
    backgroundColor: "#dbc995",
    alignItems: "center",
  },
  checkoutText: {
    fontSize: 30,
    marginBottom: 15,
    borderRadius: 5,
    marginTop:30,
    color:"#e67512",
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
    backgroundColor: "#4d2e09",
    color: "orange",
    marginTop: "4%",
    paddingHorizontal: 40,
    alignItems: "center",
    marginTop:54,
    marginHorizontal: 20,
    width: "86%",
    paddingVertical: 5,
    borderColor: "orange",
    borderWidth: 5,
    borderRadius: 20,
  },
});
