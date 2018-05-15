import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';
import data  from '../../data/json-db-sample/'

const RecipeCalendar = (props) => {
  return (
    <Calendar>
      <Title text="Recipes Calendar" />
      <Days>
        {/* this is a loop */}
        <Day>
          <Icon name="nutrition"></Icon>
          {day.name}
        </Day>
        <Body>
          <RecipeTitle></RecipeTitle>
          {/*
             Letter is just a link to main recipe.
             Like first recipe is weekly menu list is came with `A`
             Second letter came with `B`
             We don't need to have a custom tag for recipe letter.
             this just for a sample purposes.
           */}
          <RecipeLetter></RecipeLetter>
        </Body>
      </Days>
    </Calendar>
  );
};

export default RecipeCalendar;
