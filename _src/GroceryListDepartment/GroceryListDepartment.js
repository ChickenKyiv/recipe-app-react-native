import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';
import data  from '../../data/json-db-sample/'

const GroceryListDepartments = (props) => {
  return (
    <List>
      <Title text="DRY GOODS" />
      {/* this is a loop */}
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
