import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import React from 'react';


const Tabs = (props) => {
  return (
    {/* maybe it'll be anothe way to do menu? */}
    <Tabs>
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
