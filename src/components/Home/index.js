import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaView } from 'react-navigation';

import Directions from '../Directions';
import FreeRecipes from '../FreeRecipes';
import GroceryList from '../GroceryList';
import GroceryListDepartment from '../GroceryListDepartment';
import GroceryListSettings from '../GroceryListSettings';

import styles from './styles';

const ExampleRoutes = {
  Directions,
  FreeRecipes,
  GroceryList,
  GroceryListDepartment,
  GroceryListSettings
};

const ExampleInfo = {
  Directions : {
    name : 'Directions'
  },
  FreeRecipes : {
    name : 'FreeRecipes'
  },
  GroceryList : {
    name : 'GroceryList'
  },
  GroceryListDepartment : {
    name : 'GroceryListDepartment'
  },
  GroceryListSettings : {
    name : 'GroceryListSettings'
  }
};

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SafeAreaView forceInset={{ bottom: 'always', horizontal: 'never' }}>
            <View style={{ backgroundColor: '#fff' }}>
              {Object.keys(ExampleRoutes).map((routeName) => (
                <TouchableOpacity
                  key={routeName}
                  onPress={() => {
                    let route = ExampleRoutes[routeName];
                    if (route.screen || route.path || route.params) {
                      const { path, params, screen } = route;
                      const { router } = screen;
                      const action =
                        path && router.getActionForPathAndParams(path, params);
                      navigation.navigate(routeName, {}, action);
                    } else {
                      navigation.navigate(routeName);
                    }
                  }}
                >
                  <SafeAreaView
                    style={styles.itemContainer}
                    forceInset={{ veritcal: 'never', bottom: 'never' }}
                  >
                    <View style={styles.item}>
                      <Text style={styles.title}>
                        {ExampleInfo[routeName].name}
                      </Text>
                    </View>
                  </SafeAreaView>
                </TouchableOpacity>
              ))}
            </View>
          </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;