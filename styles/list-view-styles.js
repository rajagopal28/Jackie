import {
  StyleSheet
} from 'react-native';


const ListViewStyles = StyleSheet.create({
   list: {
          justifyContent: 'space-around',
          flexWrap: 'wrap'
      },
  container: {
    flex: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderWidth: 1
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
});

export default ListViewStyles;
