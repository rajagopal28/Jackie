import {
  StyleSheet
} from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  form_container: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  form_input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
export default HomeStyles;
