import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const Account = ({ navigation }) => {
  const signOut = () => {
    navigation.replace("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2ec791",
        marginTop: 40,
      }}
    >
      <View style={{ flex: 1 , alignItems:"center"}}>

        <Text style={{ fontSize: 30 ,}}>Account Details</Text>
        <Text style={{ fontSize: 30, marginTop:30 }}> User Email:</Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#215946",
            height: 90,
            width: "90%",
            paddingHorizontal:20,
            borderRadius: 30,
          }}
          onPress={signOut}
        >
          <Text style={{ fontSize: 50, padding: 10, color: "orange" }}>
            SignOut
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;


