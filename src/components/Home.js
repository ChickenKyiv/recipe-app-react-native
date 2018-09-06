import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const list = [
  {
    name: 'Directions',
    onPress : () => {
      console.log('DIRECTIONS');
      console.log(this.props.navigation);
    }
  },
];

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              onPress={l.onPress}
            />
          ))
        }
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container : {
    paddingTop: getStatusBarHeight(),
  }
});