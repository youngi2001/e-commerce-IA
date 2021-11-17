import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import allItemsInCart from "../storeItems/cartItems";

const Cart = ({ navigation }) => {
  function renderCartItems(item, index) {
    return (
      <View
        style={{
          flex: 1,
          width: "95%",
          height: 150,
          backgroundColor: "#ffbb00",
          marginBottom: 15,
          marginLeft: 15,
          borderRadius: 22,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignContent: "center", width: "50%" }}>
          <Text
            style={{
              fontSize: 22,
              padding: 10,
              color: "#4d2e09",
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 20, padding: 15 }}>{item.price}</Text>
        </View>
        <Image
          source={item.image}
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
            marginRight: 15,
            resizeMode: "contain",
          }}
        />
      </View>
    );
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
          style={{ backgroundColor: "white", borderRadius: 10, marginLeft: 5 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="arrow-back" size={34} color="black" />
        </TouchableOpacity>

        <Text style={{ fontSize: 30 }}> Cart</Text>
        <TouchableOpacity
          style={{ backgroundColor: "white", borderRadius: 10, marginRight: 5 }}
          onPress={() => {
            navigation.replace("Home");
            allItemsInCart.splice(0, allItemsInCart.length);
          }}
        >
          <AntDesign name="delete" size={34} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, marginTop: 15 }}>
          List ready for Payment
        </Text>
      </View>

      {/* list items added to cart */}
      <View style={{ marginTop: 15, borderTopLeftRadius: 10, height: "74%" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={allItemsInCart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => renderCartItems(item, index)}
        />
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "green",
          marginHorizontal: "15%",
          marginTop: 25,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text
          style={{
            fontSize: 23,
            padding: 15,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Pay Now
        </Text>
      </TouchableOpacity>
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
