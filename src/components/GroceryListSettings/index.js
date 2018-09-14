import React, { Component } from 'react';
import { View, Text, Switch, ScrollView} from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';

import styles from './styles';

class GroceryListSettings extends Component {
  render() {

    let data = [{
      value: '1',
    }, {
      value: '2',
    }, {
      value: '3',
    },
    {
      value: '4',
    }];

    return (
      <ScrollView style={styles.container}>
        <Button
          title='Continue'
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={{
            backgroundColor: '#4d4dff',

            borderRadius: 5,
            paddingTop : 15,
            paddingBottom : 15
          }}
          titleStyle={{fontWeight: 'bold', fontSize: 23}}
          containerStyle={{
            // marginVertical: 5,
            // height: 50, width: 230

          }}
          onPress={() => console.log('aye')}
          underlayColor="transparent"
        />

        <View style={{
          // backgroundColor : 'blue',
          margin : 10,
          padding : 10,
          borderWidth : 0.5
        }}>
          <GroceryListItemSettings title='Pork Tenderloin with Roasted Cherries'
                                   data={data}
          />
          <GroceryListItemSettings title='Beef, Red Pepper and Snow Pea Stir-Fry'
                                   data={data}
          />
          <GroceryListItemSettings title='Meatball Sliders'
                                   data={data}
          />

        </View>


      </ScrollView>
    );
  }
}

export default GroceryListSettings;


class GroceryListItemSettings extends Component {

  constructor(props) {
    super(props);

    this.codeRef = this.updateRef.bind(this, 'code');
  }

  onChangeText(text) {
    ['code']
      .map((name) => ({ name, ref: this[name] }))
      .filter(({ ref }) => ref && ref.isFocused())
      .forEach(({ name, ref }) => {
        this.setState({ [name]: text });
      });
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  render () {
    return (
      <View style={styles.itemSettingsContainer}>
        <Text style={styles.itemSettingsTitle}>{title}</Text>
        <View style={styles.itemSettingsContent}>

          <View style={styles.itemSettingsRow}>
            <Text style={styles.itemSettingsLabel}>Servings</Text>
            <View style={{
              // backgroundColor : 'green',
            }}>
              {/*<Dropdown*/}
              {/*value={'1'}*/}
              {/*// label='Favorite Fruit'*/}
              {/*data={data}fDropdown*/}
              {/*/>*/}
              <Dropdown
                ref={this.codeRef}
                value={'123'}
                onChangeText={this.onChangeText}
                label='Color code'
                data={data}
                propsExtractor={({ props }, index) => props}
              />
            </View>
          </View>

          <View style={styles.itemSettingsRow}>
            <Text style={styles.itemSettingsLabel}>Disable</Text>

            <Switch/>
          </View>


        </View>
      </View>
    );
  }
}

// const GroceryListItemSettings = ({title, recipeId, groceryId, data }) => (
//   <View style={styles.itemSettingsContainer}>
//     <Text style={styles.itemSettingsTitle}>{title}</Text>
//     <View style={styles.itemSettingsContent}>
//
//       <View style={styles.itemSettingsRow}>
//         <Text style={styles.itemSettingsLabel}>Servings</Text>
//         <View style={{
//           // backgroundColor : 'green',
//         }}>
//           {/*<Dropdown*/}
//             {/*value={'1'}*/}
//             {/*// label='Favorite Fruit'*/}
//             {/*data={data}*/}
//           {/*/>*/}
//           <Dropdown
//             // ref={this.codeRef}
//             value={'123'}
//             onChangeText={this.onChangeText}
//             label='Color code'
//             data={data}
//             propsExtractor={({ props }, index) => props}
//           />
//         </View>
//       </View>
//
//       <View style={styles.itemSettingsRow}>
//         <Text style={styles.itemSettingsLabel}>Disable</Text>
//
//         <Switch/>
//       </View>
//
//
//     </View>
//   </View>
// );

