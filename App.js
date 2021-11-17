import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';



//Screen
import loginScreen from './screens/Login';
import Home from './screens/Home';
import Account from './screens/Account';
import signup from './screens/signup';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';



export default function App() {
  
  
  const MainNavigation = createStackNavigator();

  

  return (
    
    

    <View style={{flex:1}}>
      
      <NavigationContainer>
        <MainNavigation.Navigator screenOptions={{headerShown:false}} initialRouteName="Login" >
          <MainNavigation.Screen name="Login" component={loginScreen}/>
          <MainNavigation.Screen name="Home" component={Home} />
          <MainNavigation.Screen name="Account" component={Account} />
          <MainNavigation.Screen name="signup" component={signup} />
          <MainNavigation.Screen name="Cart" component={Cart} />
          <MainNavigation.Screen name="Checkout" component={Checkout}/>
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
