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
    <Checkbox index={i} value={data.recipe[i].value} label={data.recipe[i].title} />
  );
}

const GroceryListDepartments = (props) => {
  return (
    <List>
      <Title text="DRY GOODS" />
      {/* this is a loop */}
      {items}
      <Checkbox value="1" label="Ketchup 0.2 cup" />
      <Checkbox value="2" label="Kosher salt and freshly good paper" />
      <Checkbox value="3" label="Olive Oil" />
      <Checkbox value="4" label="Mascarpone" />
      <Checkbox value="5" label="Lemon" />
      <Checkbox value="6" label="Raspberries" />
    </List>

  );
};

export default GroceryListDepartments;
