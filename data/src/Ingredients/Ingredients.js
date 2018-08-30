import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';

import data from '../../data/json-db-sample/'

const items = [];
for (let i=0; i < data.recipe[0].directions.length; i++){
  items.push(
    <Item index={i}>
      {data.recipe[0].ingredients[i]}
      // {data.recipe[0].ingredients[i].qty}
      // {data.recipe[0].ingredients[i].measurements}
      // {data.recipe[0].ingredients[i].name}
    </Item>
  );
}

const Ingredients = (props) => {
  return (
    <Wrapper>
      <Title text="Ingredients" />
      <List>
        {/* it's a loop */}
        {items}
        <Item>
          2 tablespoons olive oil divided
        </Item>
        <Item>
          1.25 pounds pork tenderloin excess fat and silver skin removed
        </Item>
        <Item>
          0.5 small red onion cut into long slivers
        </Item>
        <Item>
          8 ounces fresh cherries pitted and halved
        </Item>
        <Item>
          0.5 cup low-sodium chicken broth
        </Item>
        <Button>
          Button Title
        </Button>

      </List>
    </Wrapper>
  );
};

export default Ingredients;
