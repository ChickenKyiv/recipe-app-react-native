import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ListItem} from 'react-native-elements';
import Collapsible from "react-native-collapsible";

import {titleStyles} from './styles';


class GroceryListItem extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  };

  // this.state.collapsed
  render() {
    return (
      <View>
        <ListItem hideChevron={true}
                  title={this.props.name}
                  containerStyle={styles.listItemContainerStyle}
                  leftIcon={listItemStyles.leftIcon}
                  onPress={this.toggleExpanded}
        />
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>
              Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
              ribs
            </Text>
          </View>
        </Collapsible>
      </View>
    );
  }
}

export default GroceryListItem;

const listItemStyles = {
  leftIcon: {
    type: 'ionicon',
    color: '#808080',
    name: 'ios-arrow-down',
    style: {
      paddingLeft: 7,
      paddingRight: 5
    },
    backgroundColor: 'red',
    size: 40
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#ff6666',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },

  listItemContainerStyle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#cbd2d9'
  },

});