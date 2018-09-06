import React, {Component} from 'react';
import {View, FlatList, Text} from "react-native";
import {List, ListItem, CheckBox} from "react-native-elements";
import directions from "../../assets/data/directions";

import styles from './styles';

class GroceryListDepartment extends Component {

  state = {
    checked : []
  };

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
          <List containerStyle={styles.listContainerStyle}>
            {
              directions[0].directions.map((item,index) => (
                <View style={styles.checkBoxContainer}
                      key={index}>
                  <CheckBox
                    title={item}
                    label={item}
                    value={index}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked.includes(index)}
                    onPress={() => this.checkItem(index)}
                    textStyle={{
                      fontWeight : '300'
                    }}
                    style={{
                      backgroundColor : 'green'
                    }}
                  />
                </View>
              ))
            }
          </List>

        </View>
      </View>
    );
  }
}

export default GroceryListDepartment;