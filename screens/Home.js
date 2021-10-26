import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AppLoading from "expo-app-loading";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, FlatList, TextInput } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useState } from "react";

const Home = ({ navigation }) => {
  const [foodStuff, setFoodStuff] = useState([
    { key: "1", name: "Yam",price:"$200", image: require("../assets/images/yam.png") },
    { key: "2", name: "Tomatoes", price:"$300", image: require("../assets/images/yam.png") },
    { key: "3", name: "Pepper", price:"$1099", image: require("../assets/images/yam.png") },
    { key: "4", name: "Ginger", price:"$2000", image: require("../assets/images/yam.png") },
    { key: "5", name: "Yam-pona", price:"$200", image: require("../assets/images/yam.png") },
    { key: "6", name: "Onion", price:"$230", image: require("../assets/images/yam.png") },
    { key: "7", name: "Rice",  price:"$29", image: require("../assets/images/yam.png") },
    { key: "89", name: "Meat", price:"$190", image: require("../assets/images/yam.png") },
    { key: "8", name: "kooko", price:"$99", image: require("../assets/images/yam.png") },
    { key: "9", name: "koo45",  price:"$200", image: require("../assets/images/yam.png") },
    { key: "10", name: "kooko 34", price:"$200", image: require("../assets/images/yam.png") },
    { key: "77", name: "Rice", price:"$45", image: require("../assets/images/yam.png") },
  ]);

  const onButtonClick = () => {
    navigation.navigate("Cart");
  };

  let [fontLoaded] = useFonts({
    Inter_700Bold: require("../assets/fonts/Inter-ExtraBold.ttf"),
    Inter_Thin: require("../assets/fonts/Inter-Thin.ttf"),
    NotoSerifDisplay_Bold: require("../assets/fonts/NotoSerifDisplay-Bold.ttf"),
    AbrilFatface_Regular: require("../assets/fonts/AbrilFatface-Regular.ttf"),
  });

  //render all the items available
  function renderFoodStuff(item, index) {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
          justifyContent: "space-between",
          height: 250,
          width: 155,
          flex:1,
          margin:10,
          
        }}
      >
        
        <View style={{ flex: 1, justifyContent:"flex-end" , backgroundColor:"white", borderRadius: 22,}}>
            <Text style={styles.flatViewText}>{item.name}</Text>
            <Text style={styles.flatViewPrice}>{item.price}</Text>
        </View>
        
      </TouchableOpacity>
    );
  }



  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#dbc995",
          marginTop: 40,
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
                GraberK Online
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: "AbrilFatface_Regular",
                  color: "#9e7911",
                }}
              >
                Food Delivery
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
              style={{ margin: 15 }}
            >
              <EvilIcons name="cart" size={50} color="#bd9017" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchBar}>
          <AntDesign
            name="search1"
            size={30}
            color="black"
            style={{ margin: 12 }}
          />
          <TextInput
            placeholder="Eg.  Tomatoes"
            style={{ fontSize: 21, width: 300 }}
          />
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

        {/* list of food staffs */}
        <View style={{ marginTop: 15 , height:"67%"}}>
          <FlatList
            numColumns={2}
            data={foodStuff}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => renderFoodStuff(item, index)}
          />
        </View>
      </View>
    );
  }
};

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
    fontSize: 25,
    flex: 1,
    borderRadius: 15,
  },
  searchBar: {
    height: 60,
    borderRadius: 20,
    marginHorizontal: 15,
    backgroundColor: "white",
    marginTop: 20,
    flexDirection: "row",
  },

  flatViewText: {
    fontSize: 15,
    margin: 5,
    alignContent:"center",
    justifyContent:"center",
  },
  flatViewPrice: {
    fontSize: 25,
    margin: 5,
    color:"gold",
    alignContent:"center",
    justifyContent:"center",
  },

  
});

export default Home;
