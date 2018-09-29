import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';

import NavigationApp from './navigation';

export default class App extends React.Component {
  state = {
    isReady : false
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts () {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({isReady : true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <NavigationApp/>
    );
  }
}