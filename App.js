import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import Login from './screens/Login';
import Home from './screens/Home';
import Cart from './screens/Cart';


export default function App() {

  const MainNavigation = createStackNavigator();


  return (
    

    <View style={{flex:1}}>
      
      <NavigationContainer>
        <MainNavigation.Navigator screenOptions={{headerShown:false}} >
          <MainNavigation.Screen name="Login" component={Login} options={{headerTitle:false}}/>
          <MainNavigation.Screen name="Home" component={Home} />
          <MainNavigation.Screen name="Cart" component={Cart} options={{title:"Cart Selection"}}/>
        </MainNavigation.Navigator>

      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
