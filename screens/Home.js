import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
} from "react-native";
import AppLoading from "expo-app-loading";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, FlatList, TextInput } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useState } from "react";
import { BlurView } from "expo-blur";


// Imported Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import shoesAvailable from "../storeItems/data";
import allItemsInCart from "../storeItems/cartItems";


const Home = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    Inter_700Bold: require("../assets/fonts/Inter-ExtraBold.ttf"),
    Inter_Thin: require("../assets/fonts/Inter-Thin.ttf"),
    NotoSerifDisplay_Bold: require("../assets/fonts/NotoSerifDisplay-Bold.ttf"),
    AbrilFatface_Regular: require("../assets/fonts/AbrilFatface-Regular.ttf"),
  });

  const [showModalView, setAddToModalView] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);


  //render all the items available
  function renderShoesAvailable(item, index) {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItems(item);
          setAddToModalView(true);
        }}
        style={{
          marginHorizontal: 15,
          justifyContent: "space-between",
          height: 250,
          width: 155,
          flex: 1,
          margin: 10,
        }}
        activeOpacity={0.8}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "white",
            borderRadius: 22,
          }}
        >
          <Image
            source={item.image}
            style={{
              marginLeft: 5,
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
          />
          <View style={{ alignContent: "center" }}>
            <Text style={styles.flatViewText}>{item.name}</Text>
            <Text style={styles.flatViewPrice}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // function to display all the shoe sizes available
  function renderShoeSize() {
    return selectedItems.size.map((item, index) => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#3b391c",
            borderRadius: 10,
            paddingHorizontal: 4,
            backgroundColor:
              selectedItems.size[index] == selectedSize ? "orange" : "#3b391c",
            borderWidth: 2,
            borderColor: "#ffbb00",
          }}
          key={index}
          onPress={() => {
            setSelectedSize(item);
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>{item}</Text>
        </TouchableOpacity>
      );
    });
  }

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffebd4",
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
            

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Account");
              }}
              style={{ margin: 15 }}
            >
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={40}
                color="#bd9017"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
              style={{ margin: 15 }}
            >
              <Entypo name="shopping-cart" size={39} color="black" />
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
        {/* the view for the shoes categories */}
        <Text
          style={{
            color: "#2b1902",
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "Inter_Thin",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Popular Categories
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{}}
          >
            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Adidas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Nike</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Rebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Jordan</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* list of All shoes that are available in the database*/}
        <View style={{ marginTop: 15, height: "67%", borderTopLeftRadius: 10 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={shoesAvailable}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => renderShoesAvailable(item, index)}
          />
        </View>

        {/*Modal View that shows the item selected to see more details */}
        {selectedItems && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModalView}
          >
            <BlurView
              style={{
                flex: 1,
                alignItems: "center",
              }}
              intensity={143}
              tint="light"
            >
              {/* to close the modal view */}
              <TouchableOpacity
                style={styles.absolute}
                onPress={() => {
                  setAddToModalView(false);
                  setSelectedItems(null);
                  setSelectedSize("");
                }}
              ></TouchableOpacity>

              {/* Items that appear on the modal view */}
              <View
                style={{
                  justifyContent: "center",
                  width: "90%",
                  height: "100%",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      marginTop: "60%",
                    }}
                  >
                    Shoes with
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      marginBottom: 30,
                    }}
                  >
                    Free Shipping
                  </Text>
                  <Text style={{ fontSize: 25, fontFamily: "Inter_700Bold" }}>
                    {selectedItems.name}
                  </Text>
                </View>
                {/* Image of selected item */}
                <View style={{}}>
                  <Image
                    source={selectedItems.image}
                    style={{ width: 300, height: 300, resizeMode: "contain" }}
                  />
                </View>

                {/* Small details about item selected */}
                <View style={{}}>
                  <View style={{ backgroundColor: "orange", borderRadius: 12 }}>
                    <Text style={{ marginHorizontal: 30, fontSize: 30 }}>
                      Choose Size
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 20,
                    }}
                  >
                    {renderShoeSize()}
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: "35%",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <View style={{ alignContent: "center" }}>
                      <Text style={{ fontSize: 35, marginRight: "10%" }}>
                        {selectedItems.price}
                      </Text>
                    </View>
                    {/* View for the add to cart button and price */}
                    <View>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "orange",
                          borderRadius: 10,
                          width: "100%",
                          height: "40%",
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                        onPress={() => {
                          allItemsInCart.push(selectedItems);
                          setAddToModalView(false);
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 30,
                            paddingHorizontal: 10,
                            // paddingVertical: 15,
                            marginLeft: "2%",
                          }}
                        >
                          Add to Cart
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </BlurView>
          </Modal>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  categories: {
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: "#4d2e09",
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 10,
  },
  categoriesText: {
    color: "orange",
    fontSize: 20,
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
    marginLeft: 15,
    fontSize: 19,
    alignContent: "center",
    justifyContent: "center",
  },
  flatViewPrice: {
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 5,
    color: "orange",
    alignContent: "center",
    justifyContent: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Home;
