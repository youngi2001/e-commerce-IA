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
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, FlatList, TextInput } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useState } from "react";
import { BlurView } from "expo-blur";


// Imported Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import allItemsInCart from "../storeItems/cartItems";


const Home = ({ navigation }) => {
  
  const [showModalView, setAddToModalView] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);

  //Products that are available available for sale
const productsAvailable = [
  {
    key: "1",
    name: "Samsung Earphone",
    price: "$10",
    details:"This is a quality product",
    image: require("../assets/images2/earphones.png"),
  },
  {
    key: "2",
    name: "Dell XPS",
    price: "$153.00",
    color: "white",
    image: require("../assets/images2/dell.jpeg"),
  },
  {
    key: "3",
    name: "Hp Pavilion",
    price: "$1099",
    image: require("../assets/images2/pavilion.jpeg"),
  },
  {
    key: "4",
    name: "Gucci Dive Watch",
    price: "$21100",
    image: require("../assets/images2/gucci.jpeg"),
  },
  {
    key: "5",
    name: "Masserati Watch",
    price: "$230",
    image: require("../assets/images2/masserati.jpeg"),
  },
  {
    key: "6",
    name: "Hp Laptop",
    price: "$29",
    image: require("../assets/images2/hplaptop.jpeg"),
  },
  {
    key: "7",
    name: "Samsung 4K TV",
    price: "$190",
    image: require("../assets/images2/samsung.jpeg"),
  },
  {
    key: "8",
    name: "Vestel 4K TV",
    price: "$1900",
    image: require("../assets/images2/vestel.jpeg"),
  },
  
];


  //render all the items available
  function renderProductsAvailable(item, index) {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItems(item);
          setAddToModalView(true);
        }}
        style={{
          marginHorizontal: 15,
          height: 250,
          width: "90%",
          flexDirection:"row",
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
              marginLeft:"30%",
              resizeMode: "contain",
              alignItems:"flex-end"
            }}
          />
          <View style={{ alignContent: "center", flexDirection:"row" }}>
            <Text style={styles.flatViewText}>{item.name}</Text>
            <Text style={styles.flatViewPrice}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  

  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#2ce6a4",
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
                color="black"
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
            placeholder="Eg.  Iphone X"
            style={{ fontSize: 21, width: 300 }}
          />
        </View>
        {/* the view for the items items categories */}
        <Text
          style={{
            color: "#2b1902",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Categories
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{}}
          >
            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Laptops</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Phones</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Accessories</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* list of products staffs */}
        <View style={{ marginTop: 15, height: "67%", borderTopLeftRadius: 10 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={productsAvailable}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => renderProductsAvailable(item, index)}
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
                      marginTop: "50%",
                    }}
                  >
                    Products comes with
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      marginBottom: 50,
                    }}
                  >
                    Free Shipping
                  </Text>
                  <Text style={{ fontSize: 25, }}>
                    {selectedItems.name}
                  </Text>
                </View>
                {/* Image of selected item */}
                <View style={{alignItems:"center"}}>
                  <Image
                    source={selectedItems.image}
                    style={{ width: 300, height: 300, resizeMode: "contain",  }}
                  />
                </View>
                
                  
                  {/*Shows the price for the item selected*/}
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

                    {/* View for the add Product to cart button and price */}
                    <View>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#aee6d2",
                          borderRadius: 10,
                          width: "100%",
                          height: "30%",
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

            </BlurView>
          </Modal>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  categories: {
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: "#0b543b",
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 10,
  },
  categoriesText: {
    color: "white",
    fontSize: 20,
  },
  productsItem: {
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
    marginLeft: 30,
    fontSize: 19,
    alignContent: "center",
    justifyContent: "center",
  },
  flatViewPrice: {
    fontSize: 30,
    marginLeft: 30,
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
