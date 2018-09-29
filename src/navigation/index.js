import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from '../components/Home';
import Directions from '../components/Directions';
import FreeRecipes from '../components/FreeRecipes';
import GroceryList from '../components/GroceryList';
import GroceryListDepartment from '../components/GroceryListDepartment';
import GroceryListSettings from '../components/GroceryListSettings';
import Signup from '../components/Signup';
import Login from '../components/Login';

const ExampleRoutes = {
  Directions,
  FreeRecipes,
  GroceryList,
  GroceryListDepartment,
  GroceryListSettings,
  Signup,
  Login
};

const NavigationApp = createStackNavigator({
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

