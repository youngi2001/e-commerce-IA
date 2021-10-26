import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import yam from "../assets/yam.png";

export default function Login({ navigation }) {
  const [name, setName] = useState();

  const [num, setNum] = useState(0);
  const [increaseNum, setIncreaseNum] = useState(0);

  const onButtonClick = () => {
    setName("Asamoah");
    navigation.navigate("Home");
  };

  const onAddClick = () => {
    setIncreaseNum(increaseNum + 5);
    setNum(num + 1);
  };

  return (
    <View style={{ flex: 1, marginTop: 45, backgroundColor: "#dbc995" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 200,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "monospace",
            color: "#9e7911",
          }}
        >
          GraberK Online 
        </Text>
        <Text style={{
            fontSize: 40,
            fontFamily: "monospace",
            color: "#9e7911",
          }}>
            Shop
        </Text>
        <Image
          source={yam}
          style={{ width: 300, height: 250, resizeMode: "stretch" , borderRadius:20, marginTop:70}}
        />
      </View>
      <View style={{ marginTop: 50, }}>
        <Button title="Start Shopping Now" onPress={onButtonClick}  ></Button>
      </View>
    </View>
  );
}
