import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container : {
    // padding : 10,
    // backgroundColor : 'red',
    paddingTop: getStatusBarHeight() + 10,
    // paddingLeft : 10,
    // paddingRight : 10,
  },
  itemSettingsContainer : {
    padding : 10
  },
  itemSettingsTitle : {
    fontWeight: 'bold'
  },
  itemSettingsContent : {
    backgroundColor : 'white',
    borderColor : '#cbd2d9',
    borderWidth : 1,
    borderTopWidth : 0,
  },
  itemSettingsRow : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems : 'center',
    padding : 15,
    paddingLeft : 20,
    paddingRight : 20,
    borderTopWidth: 1,
    borderColor : '#cbd2d9',
  },
  itemSettingsLabel : {
    fontSize : 17
  }


});
export default styles;