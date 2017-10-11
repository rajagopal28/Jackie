
import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TextInput,
  ToastAndroid
} from 'react-native';

import UserService from '../services/user-service';
import HomeStyles from '../styles/app-styles';
import AppUtils from '../utils/app-utils';

const styles = HomeStyles;

class VitalsUpdateScreen extends Component {
  static navigationOptions = {
    title: 'Update Vitals',
  };
  update(event) {
    console.log('Console log for click!');
    console.log(JSON.stringify(this.state));
    const {state} = this.props.navigation;
      const { navigate } = this.props.navigation;
    let log = this.state;
    log.user_id = state.params.userId;
    log.logged_on = AppUtils.getFormattedDateString();
    console.log(log.logged_on);
    UserService.logUserVitals(log, (vitalLog) => {
      console.log('logged vitals...');
      console.log(JSON.stringify(vitalLog));
      ToastAndroid.show('Vital information has been logged!', ToastAndroid.SHORT);
      navigate('UserHome', state.params)
    });
  }
  constructor(props) {
    super(props);
    this.state = { pressure: '', sugar: '', pulse: '', temperature: '', notes: '' };
    this.buttonClicked= this.update.bind(this);
  }
  render() {
    return (
      <ScrollView style={styles.formPadding}>
        <Text style={styles.formHeading}>Vitals input</Text>
        <TextInput
          placeholder='Pressure'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          onChangeText={(pressure) => this.setState({pressure})}
          value={this.state.pressure}
        />
        <TextInput
          placeholder='Temperature'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(temperature) => this.setState({temperature})}
          value={this.state.temperature}
        />
        <TextInput
          placeholder='Sugar'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(sugar) => this.setState({sugar})}
          value={this.state.sugar}
        />
        <TextInput
          placeholder='Pulse'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(pulse) => this.setState({pulse})}
          value={this.state.pulse}
        />
        <TextInput
          placeholder='Notes(optional)'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(notes) => this.setState({notes})}
          value={this.state.notes}
        />
        <Button
          title="Update!"
          onPress={this.buttonClicked}
          accessibilityLabel="Learn more about this purple button">
          Press Me!
        </Button>
      </ScrollView>
    );
  }
}
export default VitalsUpdateScreen;
