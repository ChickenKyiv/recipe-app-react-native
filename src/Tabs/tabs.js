import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';

const items = [];
for (let i=0; i < data.recipe[0].directions.length; i++){
  items.push(
    <Item index={i} title={data[i].title}
      icon={data[i].icon} 
      link={data[i].link}>

    </Item>
  );
}

const Tabs = (props) => {
  return (
    {/* maybe it'll be anothe way to do menu? */}
    <Tabs>
      {/* it's a loop */}
      {items}
      <Item title="Weekly Menu"
            icon="list-outline" link="/weekly-menu">
      </Item>
      <Item title="Grocery Settings"
            icon="heart" link="/grocery-settings">
      </Item>
      <Item title="Grocery List"
            icon="checkbox-outline" link="/grocery-list">
      </Item>
    </Tabs>
  );
};

export default Tabs;
