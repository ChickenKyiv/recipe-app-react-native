import React, {Component} from 'react';
import {View, FlatList, Text} from "react-native";
import {List, 
  // ListItem, 
  // CheckBox, 
  Icon} from "react-native-elements";
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';

import directions from "../../assets/data/directions";
import styles from './styles';

class GroceryListDepartment extends Component {

  state = {
    checked : [],
    directions : directions[0].directions
  };

  componentDidMount () {
    console.log(this.state.directions);
  }

  checkItem (itemID) {
    const { checked } = this.state;

    if (checked.includes(itemID)) {
      this.setState({
        checked : this.state.checked.filter((id) => {
          return id !== itemID;
        })
      });
    } else {
      this.setState({
        checked : [
          ...checked,
          itemID
        ]
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
      
          <Content>
            {
              this.state.directions.map((item,index) => (
                <ListItem>
                  <CheckBox checked={this.state.checked.includes(index)} />
                  <Body>
                    <Text>{item}</Text>
                  </Body>
                </ListItem>
              ))
            }
          </Content>

        </View>
      </View>
    );
  }
}

export default GroceryListDepartment;