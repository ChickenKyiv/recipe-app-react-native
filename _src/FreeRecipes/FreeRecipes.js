import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';
import data from '../../data/json-db-sample/'

const FreeRecipes = (props) => {

  return (
    <List>
      <Title>
        Free Recipes
      </Title>
      
      {/* this is a loop */}
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
