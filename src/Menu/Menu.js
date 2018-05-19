import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';
import data  from '../../data/json-db-sample/'

const items = [];
for (let i=0; i < data.recipe[0].directions.length; i++){
  items.push(
    <Item index={i}>
      {data.recipe[0].directions[i]}
    </Item>
  );
}

const Menu = (props) => {
  return (

  );
};

export default Menu;
