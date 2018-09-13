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
  }
});

export const titleStyles = {
  titleStyle : {
    color : 'red',
    // fontSize : 30
  },
  leftIcon : {
    margin: 5,
    paddingLeft : 5,
    paddingRight : 5,
    fontSize : 30
  }
};

export default styles;