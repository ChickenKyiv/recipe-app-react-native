import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavigationApp from './navigation';
// import Directions from './components/Directions';
// import DirectionsNew from './components/Directions';
import FreeRecipes from './components/FreeRecipes';
import GroceryList from './components/GroceryList';
import GroceryListDepartment from './components/GroceryListDepartment';
import GroceryListSettings from './components/GroceryListSettings';

export default class App extends React.Component {
  render() {
    return (
      <GroceryListSettings/>
    );
  }
}