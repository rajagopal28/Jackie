
import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid
} from 'react-native';

import DoctorService from '../services/doctor-service';
import HomeStyles from '../styles/app-styles';

const styles = HomeStyles;

class DoctorLoginScreen extends Component {
  static navigationOptions = {
    title: 'Doctor Login',
  };
  login(event) {
    console.log('Console log for click!');
    console.log(JSON.stringify(this.state));
    DoctorService.login(this.state, (doctor) => {
      console.log('logged in...');
      console.log(JSON.stringify(doctor));
      if(doctor.id) {
        AsyncStorage.setItem('LoggedInUser', JSON.stringify({doctor: doctor}));
        const { navigate } = this.props.navigation;
        ToastAndroid.show('Log in success!', ToastAndroid.SHORT);
        navigate('DoctorHome', {doctorId: doctor.id});
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
      <View style={styles.form_container}>
        <Text>
          Doctorname
        </Text>
        <TextInput
          style={styles.form_input}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text>
          Password
        </Text>
        <TextInput
          style={styles.form_input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Button
          title="Login!"
          onPress={this.buttonClicked}
          accessibilityLabel="Learn more about this purple button">
          Press Me!
        </Button>
      </View>
    );
  }
}
export default DoctorLoginScreen;
