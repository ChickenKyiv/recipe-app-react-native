import React, {Component} from 'react';
import {View} from 'react-native';
import {List, ListItem} from "react-native-elements";
import GroceryListItem from './GroceryListItem';

import styles, {titleStyles} from './styles';

const listItem = [
  {
    id : 1,
    name: 'Beverages',
  },
  {
    id : 2,
    name: 'Diary',
  },
  {
    id : 3,
    name: 'DRY GOODS',
  }
];

class GroceryList extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <List containerStyle={styles.listContainerStyle}>
            <ListItem
              key={'0'}
              title='Recipes Calendar'
              titleStyle={titleStyles.titleStyle}
              leftIcon={titleStyles.leftIcon}
              hideChevron={true}
              containerStyle={styles.listItemContainerStyle}
            />
            {
              listItem.map((item, index) => (
                <GroceryListItem name={item.name}
                                 key={index}
                />
              ))
            }
          </List>
        </View>
      </View>
    );
  }
}

export default GroceryList;