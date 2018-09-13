import {CheckBox, List} from "react-native-elements";
import React from "react";
import styles from "./styles";
import directions from "../../assets/data/directions";
import {View} from "react-native";

{/*<ListItem*/}
{/*index={index}*/}
{/*key={index}*/}
{/*// title={item}*/}
{/*containerStyle={styles.listItemContainerStyle}*/}
{/*hideChevron={true}*/}
{/*style={{*/}
{/*backgroundColor : 'green'*/}
{/*}}*/}
{/*leftIcon={*/}
{/*<CheckBox*/}
{/*title={item}*/}
{/*checkedIcon='dot-circle-o'*/}
{/*uncheckedIcon='circle-o'*/}
{/*checked={false}*/}
{/*containerStyle={{*/}
{/*backgroundColor : 'red'*/}
{/*}}*/}
{/*/>*/}
{/*}*/}
{/*/>*/}



<CheckBox
  title={item}
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={true}
  containerStyle={{
    backgroundColor : 'red'
  }}
/>



<List containerStyle={styles.listContainerStyle}>
{
  directions[0].directions.map((item,index) => (
    <View style={styles.checkBoxContainer}
          key={index}
    >
      <CheckBox
        title={item}
        label={item}
        value={index}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.checked.includes(index)}
        containerStyle={{
          // backgroundColor : 'red'
          // fontWeight : '200',
          // padding: 0,
        }}
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

