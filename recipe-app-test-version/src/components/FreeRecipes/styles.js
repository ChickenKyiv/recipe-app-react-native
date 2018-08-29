import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container : {
    paddingTop: getStatusBarHeight(),
  },
  row : {
    padding : 10
  },
  listContainerStyle : {
    marginTop : 0
  },
  listItemContainerStyle : {
    borderLeftWidth : 1,
    borderRightWidth : 1,
    borderColor : '#cbd2d9'
  },
  titleStyle : {
    backgroundColor : 'red'
  }
});

export default styles;