import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Cart = ({ navigation }) => {

    function renderCartItems(){
        return(
            <TouchableOpacity>
                
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#ffbb00",
          padding: 5,
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "white", borderRadius: 10, marginLeft: 5 }} onPress={()=>{navigation.navigate("Home")}}
          >
          <Ionicons name="arrow-back" size={34} color="black" />
        </TouchableOpacity>

        <Text style={{ fontSize: 30 }}> Cart</Text>
        <TouchableOpacity
          style={{ backgroundColor: "white", borderRadius: 10, marginRight: 5 }}
        >
          <AntDesign name="delete" size={34} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbc985",
    marginTop: 40,
    //alignItems:"center"
  },
});
