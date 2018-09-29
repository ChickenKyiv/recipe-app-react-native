import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../components/Login';
import HomeScreen from '../components/Home';
import Directions from '../components/Directions';
import Signup from '../components/Signup';
import FreeRecipes from '../components/FreeRecipes';
import GroceryList from '../components/GroceryList';
import GroceryListDepartment from '../components/GroceryListDepartment';
import GroceryListSettings from '../components/GroceryListSettings';

const ExampleRoutes = {
  Directions,
  FreeRecipes,
  GroceryList,
  GroceryListDepartment,
  GroceryListSettings
};

const NavigationApp = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
      headerStyle: {
        backgroundColor: '#e94b43'
      },
      headerTitleStyle: {
        position: "absolute",
        left: "38%",
        color: '#f8feff'
      },
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Signup",
      headerStyle: {
        backgroundColor: '#e94b43'
      },
      headerTitleStyle: {
        position: "absolute",
        left: 70,
        color: '#f8feff'
      }
    }
  },
  MainScreen: {
    screen: HomeScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  },
  ...ExampleRoutes
});

export default NavigationApp;

