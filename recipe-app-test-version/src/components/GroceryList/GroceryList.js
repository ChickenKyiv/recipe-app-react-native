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
    <Category index={i} id="{category.id}" link="{grocery.id}/{category.id}">
      {data.recipe[0].directions[i]}
      <Icon src="arrow" />
      {category.name}
    </Category>
  );
}

const GroceryList = (props) => {
  return (

    <GroceryList>
      <Title>
        <Icon src="calendar-icon" />
        Recipe Calendar
      </Title>
      <List>
        {/* this is a loop */}
        {items}
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
