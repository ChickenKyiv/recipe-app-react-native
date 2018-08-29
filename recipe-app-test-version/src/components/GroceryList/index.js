import React, {Component} from 'react';
import {View, Text, SectionList} from 'react-native';
import {List, ListItem} from "react-native-elements";
import directions from "../../assets/data/directions";
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import GroceryListItem from './GroceryListItem';

import styles from './styles';

class GroceryList extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.row}>

          <List containerStyle={styles.listContainerStyle}>
            <ListItem
              key={'asd'}
              title={'LunVjp'}
              leftIcon={{ name: 'flight-takeoff' }}
              hideChevron={true}
            />
            <GroceryListItem/>
            {/*{*/}
              {/*directions[0].directions.map((item,index) => (*/}
                {/*<ListItem*/}
                  {/*index={index}*/}
                  {/*key={index}*/}
                  {/*title={(index + 1) + '. ' + item}*/}
                  {/*containerStyle={styles.listItemContainerStyle}*/}
                  {/*hideChevron={true}*/}
                {/*/>*/}
              {/*))*/}
            {/*}*/}
          </List>
        </View>
      </View>
    );
  }
}

export default GroceryList;