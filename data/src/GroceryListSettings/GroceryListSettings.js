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
    <Item index={i} title={data.recipes[i].title}>
      <Servings recipe-id="{recipe.id}" grocery-id="{grocery.id}">
      {/* it's a select with numbers 1-4*/}
      </Servings>
      <Toggle>Disable Recipe</Toggle>
    </Item>
  );
}

const GroceryListSettings = (props) => {
  return (
    <SettingsForm>
      <Title text="Grocery List Settings" />
      <Button link="/{grocery.id}">
        Go to Grocery List
      </Button>
      <List>

        {/* this is a loop */}
        {items}
        <Item title="Pork Tenderloin with Roasted Cherries">
          <Servings recipe-id="{recipe.id}" grocery-id="{grocery.id}">
          {/* it's a select with numbers 1-4*/}
          </Servings>
          <Toggle>Disable Recipe</Toggle>
        </Item>
        <Item title="Beef, Red Pepper and Snow Pea Stir-Fry">
          <Servings recipe-id="{recipe.id}" grocery-id="{grocery.id}">
          {/* it's a select with numbers 1-4*/}
          </Servings>
          <Toggle>Disable Recipe</Toggle>
        </Item>
        <Item title="Meatball Sliders">
          <Servings recipe-id="{recipe.id}" grocery-id="{grocery.id}">
          {/* it's a select with numbers 1-4*/}
          </Servings>
          <Toggle>Disable Recipe</Toggle>
        </Item>

      </List>
    </SettingsForm>
  );
};

export default GroceryListSettings;
