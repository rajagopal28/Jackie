import {
  StyleSheet
} from 'react-native';


const ListViewStyles = StyleSheet.create({
  list: {
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      backgroundColor: '#EFF0F1'
  },
  row: {
    padding: 10,
    flex: 1,
    borderBottomColor: '#bbb',
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: '#FFF',
    margin: 5
  },
  text: {
    marginLeft: 12,
    fontSize: 16,    // No background
    fontFamily: 'Avenir',               // Change default font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  }
});

export default ListViewStyles;
