import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  MainScreen  from '../screens/MainScreen'
import  AddScreen from '../screens/AddScreen'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

const RootNavigation = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">

        <Stack.Screen
          name = "MainScreen"
          component = { MainScreen }
          options={{ headerShown: false }}
          />

        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>

    
  );
};
export default RootNavigation;
