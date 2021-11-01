import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";
import {emptyUserDetails} from '../screens/signup';

const Account = ({ navigation }) => {
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
        
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#dbc985",
        marginTop: 40,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30 }}>Account Details</Text>
        <Text style={{ fontSize: 30 }}></Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "brown",
            height: 120,
            width: 200,
            borderRadius: 30,
          }}
          onPress={signOut}
        >
          <Text style={{ fontSize: 50, padding: 10, color: "orange" }}>
            LogOut
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

{
  /* <View style={{ marginTop: 10 }}>
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
        </View> */
}
