import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';



// Add the Firebase services that you want to use


//Screen
import Login from './screens/Login';
import Home from './screens/Home';
import Account from './screens/Account';
import itemScreen from './screens/itemScreen';
import signup from './screens/signup';
import Cart from './screens/Cart';


export default function App() {
  
  
  const MainNavigation = createStackNavigator();

  
   

  return (
    
    

    <View style={{flex:1}}>
      
      <NavigationContainer>
        <MainNavigation.Navigator screenOptions={{headerShown:false}} initialRouteName="Login" >
          <MainNavigation.Screen name="Login" component={Login}/>
          <MainNavigation.Screen name="Home" component={Home} />
          <MainNavigation.Screen name="Account" component={Account} />
          <MainNavigation.Screen name="itemScreen" component={itemScreen} />
          <MainNavigation.Screen name="signup" component={signup} />
          <MainNavigation.Screen name="Cart" component={Cart} />

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
