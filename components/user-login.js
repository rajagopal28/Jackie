
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';


class UserLoginScreen extends Component {
  static navigationOptions = {
    title: 'User Login',
  };
  buttonClicked(event) {
    console.log('Console log for click!');
    console.log(this.state);
  }
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="Login!"
          color="#841584"
          onPress={this.buttonClicked}
          accessibilityLabel="Learn more about this purple button">
          Press Me!
        </Button>
      </View>
    );
  }
}

export default UserLoginScreen;
