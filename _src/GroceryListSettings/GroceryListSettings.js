import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';
import data  from '../../data/json-db-sample/'

const GroceryListSettings = (props) => {
  return (
    <SettingsForm>
      <Title text="Grocery List Settings" />
      <Button link="/{grocery.id}">
        Go to Grocery List
      </Button>
      <List>

        {/* this is a loop */}
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
