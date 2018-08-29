import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ListItem} from 'react-native-elements';
import Collapsible from "react-native-collapsible";

class GroceryListItem extends Component {
  constructor () {
    super();
    this.state = {
      toggleExpanded : false
    };
  }
  toggleExpanded = () => {
    this.setState({
      toggleExpanded : !this.state.toggleExpanded
    })
  };
  render() {
    return (
      <ListItem hideChevron={true}>
        <TouchableOpacity onPress={this.toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Single Collapsible</Text>
          </View>
        </TouchableOpacity>

        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>
              Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
              ribs
            </Text>
          </View>
        </Collapsible>
      </ListItem>
    );
  }
}

export default GroceryListItem;


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
    backgroundColor: '#fff',
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
});