import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import yam from "../assets/images/yam.png";
import Home from "./Home";

const Login = ({ navigation }) => {
  const onButtonClick = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#dbc995" }}>
      <View
        style={{marginTop: 40,}}
      >
        <View style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          
        }}>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "monospace",
              color: "#9e7911",
            }}
          >
            GraberK Online
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "monospace",
              color: "#9e7911",
            }}
          >
            Shop
          </Text>
          <Image
            source={yam}
            style={{
              width: 310,
              height: 250,
              resizeMode: "stretch",
              borderRadius: 20,
              marginTop: 70,
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: 150 }}>
        <Button title="Start Shopping Now" onPress={onButtonClick}></Button>
      </View>
    </View>
  );
};

export default Login;
