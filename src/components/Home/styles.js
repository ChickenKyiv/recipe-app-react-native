import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { getStatusBarHeight } from 'react-native-status-bar-height';
 
const styles = StyleSheet.create({
  container : {
    paddingTop: getStatusBarHeight(),
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Constants.statusBarHeight,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
  backgroundUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: -100,
    height: 300,
    left: 0,
    right: 0,
  },
  bannerContainer: {
    // backgroundColor: '#673ab7',
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  bannerImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: 8,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    marginVertical: 8,
    marginRight: 5,
  },
});

export default styles;