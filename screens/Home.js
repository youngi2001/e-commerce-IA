import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function Home() {
  const [foodStuff, setFoodStuff] = useState([
    { key: 1, name: "Yam" },
    { key: 2, name: "Tomatoes" },
    { key: 3, name: "Pepper" },
    { key: 4, name: "Ginger" },
    { key: 5, name: "Yam - Pona" },
    { key: 6, name: "Onion" },
    { key: 7, name: "Rice" },
  ]);

  const [foodStuff1, setFoodStuff1] = useState([
    { key: 1, name: "kooko" },
    { key: 2, name: "kooko 45" },
    { key: 3, name: "kooko 34" },
  ]);

  let [fontLoaded] = useFonts({
    Inter_700Bold: require("../assets/fonts/Inter-ExtraBold.ttf"),
    Inter_Thin: require("../assets/fonts/Inter-Thin.ttf"),
    NotoSerifDisplay_Bold: require("../assets/fonts/NotoSerifDisplay-Bold.ttf"),
    AbrilFatface_Regular: require("../assets/fonts/AbrilFatface-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#dbc995",
          marginTop: 45,
        }}
      >
        <View style={{ backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 5,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "NotoSerifDisplay_Bold",
                  color: "#9e7911",
                }}
              >
                GraberK Online{" "}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "AbrilFatface_Regular",
                  color: "#9e7911",
                }}
              >
                Food Delivery
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                alert("Don't rush in life");
              }}
              style={{ margin: 15 }}
            >
              <EvilIcons name="cart" size={50} color="#bd9017" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 60,
            borderRadius: 20,
            marginHorizontal: 15,
            backgroundColor: "white",
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name="search1"
            size={30}
            color="black"
            style={{ margin: 12 }}
          />
          <Text style={{ margin: 10 }}> Search</Text>
        </View>

        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{}}
          >
            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Vegetables</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Yam</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Plantain</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Fruits</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <Text style={{ color: "red", fontSize: 29, fontFamily: "Inter_Thin" }}>
          This is the Home Page
        </Text>
        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
          <ScrollView>
            <View style={{ justifyContent: "space-evenly", flexDirection:"row", flex:1 , marginHorizontal:10}}>
              <View style={{flex:1}}> 
                {foodStuff.map((item) => {
                  return (
                      <View key={item.key} style={{ height: 250, width: 160 }}>
                        <Text style={styles.foodItem}> {item.name} </Text>
                      </View>
                  );
                })}
              </View>

              <View style={{flex:1}}>
                {foodStuff1.map((item) => {
                  return (
                      <View key={item.key} style={{ height: 250, width: 160 }}>
                        <Text style={styles.foodItem}> {item.name} </Text>
                      </View>
                    
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categories: {
    marginHorizontal: 10,
    marginTop: 15,
    backgroundColor: "#241e0d",
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 10,
  },
  categoriesText: {
    color: "orange",
    fontSize: 20,
  },
  foodItem: {
    marginVertical: 40,
    backgroundColor: "yellow",
    fontSize: 35,
    flex: 1,
  },
});
