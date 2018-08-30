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
    <Item link="/recipe/{recipe.id}" >
      <Image src="{recipe.img}" />
      Pork Tenderloin with Roasted Cherries
      {weekday}
      {recipe.title}
      {recipe.description}
    </Item>
    <Separator />
  );
}

const WeeklyMenu = (props) => {

  return (
    <List>
      <Title>
        Weekly Menu - September 5 - 11 {/* this is an example */}
        {/* maybe we should have some function that will convert date into that text */}
        Weekly Menu - {title}
      </Title>
      <Description>

        Happy Labor Day Weekend!! {/* this is an example */}
        {description}
      </Description>
      {/* other way */}
      <Description title="{description}" />

      {/* this is a loop */}
      <List>
        {items}
        <Item link="/recipe/{recipe.id}" >
          <Image src="{recipe.img}" />
          Pork Tenderloin with Roasted Cherries
          {weekday}
          {recipe.title}
          {recipe.description}
        </Item>
        <Separator />

        <Item link="/recipe/{recipe.id}" >
          <Image src="{recipe.img}" />
          Beef, Red Pepper and Snow Pea Stir-Fry
          {weekday}
          {recipe.title}
          {recipe.description}
        </Item>
        <Separator />

        <Item link="/recipe/{recipe.id}" >
          <Image src="{recipe.img}" />
          Meatball Sliders
          {weekday}
          {recipe.title}
          {recipe.description}
        </Item>
        <Separator />

        <Item link="/recipe/{recipe.id}" >
          <Image src="{recipe.img}" />
          Item title
          {weekday}
          {recipe.title}
          {recipe.description}
        </Item>
        <Separator />

        <Item link="/recipe/{recipe.id}" >
          <Image src="{recipe.img}" />
          Item title
          {weekday}
          {recipe.title}
          {recipe.description}
        </Item>
        <Separator />

        <Item link="/recipe/{recipe.id}" >
          <Image src="{recipe.img}" />
          Item title
          {weekday}
          {recipe.title}
          {recipe.description}
        </Item>
        <Separator />
      </List>




      <Button link="/{previousWeekLink}">
        Previous week
      </Button>
    </List>
  );
};

export default WeeklyMenu;
