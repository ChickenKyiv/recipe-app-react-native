import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from '../components/Home';
import Directions from '../components/Directions';

const NavigationApp = createStackNavigator({
  MainScreen: {
    screen: HomeScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  },
  DirectionsScreen: {
    screen: Directions,
    navigationOptions: { gesturesEnabled: false, header: null }
  },
});

export default NavigationApp;