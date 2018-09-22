import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getStatusBarHeight} from "react-native-status-bar-height";
import { List, ListItem } from 'react-native-elements';

import { getAllDirectionsList } from '../../config/HelperFunctions';
import directions from '../../assets/data/directions';
import styles from './styles';

class DirectionsNew extends Component {
  // static getDerivedStateFromProps (props, state) {
  //   getAllDirectionsList();
  //   return null;
  // }

  state = {};

  componentDidMount () {
    getAllDirectionsList();
  }

  render () {
    return (
      <View>

      </View>
    );
  }
} 

const Directions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <List containerStyle={styles.listContainerStyle}>
          {
            directions[0].directions.map((item,index) => (
              <ListItem
                index={index}
                key={index}
                title={(index + 1) + '. ' + item}
                containerStyle={styles.listItemContainerStyle}
                hideChevron={true}
              />
            ))
          }
        </List>
      </View>
    </View>
  )
};

// export default Directions;
export default DirectionsNew;