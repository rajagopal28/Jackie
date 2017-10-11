
import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import UserService from '../services/user-service';
import HomeStyles from '../styles/app-styles';

const styles = HomeStyles;

class UserLoginScreen extends Component {
  static navigationOptions = {
    title: 'User Login',
  };
  login(event) {
    console.log('Console log for click!');
    console.log(JSON.stringify(this.state));
    let _this = this;
    AsyncStorage.getItem('DeviceGCMID').then((gcmid) => {
      var params = this.state;
      params.gcmid = gcmid;
      _this.loginUser(params);
    }).catch((error)=> {
      console.log('gcm id not found... still loggin in user ...');
      ToastAndroid.show('GCMID not found..', ToastAndroid.SHORT);
      _this.loginUser(this.state);
    });
  }
  loginUser(params) {
    UserService.login(params, (user) => {
      console.log('logged in...');
      console.log(JSON.stringify(user));
      if(user.id) {
        AsyncStorage.setItem('LoggedInUser', JSON.stringify({user: user}));
        const { navigate } = this.props.navigation;
        ToastAndroid.show('Log in success!', ToastAndroid.SHORT);
        navigate('UserHome', {userId: user.id});
      }
    });
  }
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.buttonClicked= this.login.bind(this);
  }
  render() {
    return (
      <ScrollView style={styles.formPadding}>
        <Text style={styles.formHeading}>Credentials</Text>
        <TextInput
            placeholder='Username'
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            value={this.state.username}
            onChangeText={(username) => this.setState({username})} />
        <TextInput
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})} />
        <View style={{margin: 7}}/>
        <Button
          title="Login!"
          onPress={this.buttonClicked}
          accessibilityLabel="Learn more about this purple button"/>
    </ScrollView>
    );
  }
}
export default UserLoginScreen;
