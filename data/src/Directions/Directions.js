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


const Directions = (props) => {


  return (
    <Directions>
      <Title value="Directions" />
      <List>
      {/* this is a loop */}
        {items}
        <Item index="1">
          Preheat oven to 425 degrees.
        </Item>
        <Item index="2">
        Heat a large ovenproof nonstick skillet over medium-high heat.
         Add 1 tablespoon oil; swirl to coat.
        </Item>
        <Item index="3">
        Combine 1 teaspoon salt, pepper, cumin, cinnamon and ginger.
         Rub pork evenly with this spice mixture.
        </Item>
        <Item index="4">
        Add pork to now-hot skillet; saute 4 minutes.
        </Item>
      </List>
    </Directions>
  );
};

export default Directions;
