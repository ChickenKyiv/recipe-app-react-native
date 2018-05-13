import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';
import data from '../../data/json-db-sample/'

const GroceryList = (props) => {
  return (

    <GroceryList>
      <Title>
        <Icon src="calendar-icon" />
        Recipe Calendar
      </Title>
      <List>
        {/* this is a loop */}
        <Category id="{category.id}" link="{grocery.id}/{category.id}">
          <Icon src="arrow" />
          {category.name}
        </Category>
        <Category id="{category.id}" link="{grocery.id}/{category.id}">
          <Icon src="arrow" />
          {category.name}
        </Category>
        <Category id="{category.id}" link="{grocery.id}/{category.id}">
          <Icon src="arrow" />
          {category.name}
        </Category>
        <Category id="{category.id}" link="{grocery.id}/{category.id}">
          <Icon src="arrow" />
          {category.name}
        </Category>
      </List>
    </GroceryList>

  );
};

export default GroceryList;
