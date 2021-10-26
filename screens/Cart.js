import React from "react";
import { View, Text } from "react-native";
import Home from "./Home";


const Cart = () =>{
    return(
        <View style={{
            flex: 1,
            backgroundColor: "#dbc985",
            marginTop:40,
          }}>
            <Text>This is the Cart Page</Text>
        </View>
    );
}

export default Cart;

{/* <View style={{ marginTop: 10 }}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flex: 1 }}>
                {foodStuff.map((item) => {
                  return (
                    <View key={item.key} style={{ height: 250, width: 160 }}>
                      <Text style={styles.foodItem}> {item.name} </Text>
                    </View>
                  );
                })}
              </View>

              <View style={{ flex: 1 }}>
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

          <FlatList
            data={foodStuff}
            renderItem={({ item }) => {
              <View style={styles.foodItem}>
                <Text style={styles.categoriesText}> {item.name} </Text>
              </View>;
            }}
          />
        </View> */}