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
    <Item index={i} link="/">
      {data.recipe[i].title}
    </Item>
  );
}

const FreeRecipes = (props) => {

  return (
    <List>
      <Title>
        Free Recipes
      </Title>

      {/* this is a loop */}
      {items}
      <Item link="/">
        Pork Tenderloin with Roasted Cherries
      </Item>
      <Item link="/">
        Beef, Red Pepper and Snow Pea Stir-Fry
      </Item>
      <Item link="/">
        Meatball Sliders
      </Item>
      <Item link="/">
        Item title
      </Item>
      <Item link="/">
        Item title
      </Item>
      <Item link="/">
        Item title
      </Item>
    </List>
  );
};

export default FreeRecipes;
