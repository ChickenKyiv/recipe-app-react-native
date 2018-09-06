import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container : {
    padding : 10,
    paddingTop: getStatusBarHeight() + 10,
  },
  row : {
    padding : 15,
    borderColor : '#cbd2d9',
    borderWidth : 1
  },
  listContainerStyle : {
    marginTop : 0,
    padding : 0,
    // backgroundColor : 'red'
  },
  listItemContainerStyle : {
    borderLeftWidth : 1,
    borderRightWidth : 1,
    borderColor : '#cbd2d9',
    backgroundColor : 'yellow',
  },
  checkBoxContainer : {
    // backgroundColor : 'yellow',
    paddingBottom : 0,
    paddingTop : 0,
    padding : 0,
    margin : 0,
    borderColor : '#cbd2d9',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  }
});
export default styles;