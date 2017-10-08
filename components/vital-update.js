
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

import UserService from '../services/user-service';
import HomeStyles from '../styles/app-styles';

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
    log.logged_on = this.getFormattedDateString();
    console.log(log.logged_on);
    UserService.logUserVitals(log, (vitalLog) => {
      console.log('logged vitals...');
      console.log(JSON.stringify(vitalLog));
      ToastAndroid.show('Vital information has been logged!', ToastAndroid.SHORT);
      navigate('UserHome', state.params)
    });
  }
  getFormattedDateString(date) {
    let d = date ? date : new Date();
    return d.getFullYear()
      + '-' + (d.getMonth()> 9 ? d.getMonth() : '0'+d.getMonth())
      + '-' + (d.getDate() > 9 ? d.getDate() : '0'+d.getDate())
      + ' ' + (d.getHours() > 9 ? d.getHours() : '0'+d.getHours())
      + ':' + (d.getMinutes() > 9 ? d.getMinutes() : '0'+d.getMinutes())
      + ':' + (d.getSeconds() > 9 ? d.getSeconds() : '0'+d.getSeconds());
  }
  constructor(props) {
    super(props);
    this.state = { pressure: '', sugar: '', pulse: '', temperature: '', notes: '' };
    this.buttonClicked= this.update.bind(this);
  }
  render() {
    return (
      <View style={styles.form_container}>
        <Text>Pressure</Text>
        <TextInput
          style={styles.form_input}
          onChangeText={(pressure) => this.setState({pressure})}
          value={this.state.pressure}
        />
        <Text>Temperature</Text>
        <TextInput
          style={styles.form_input}
          onChangeText={(temperature) => this.setState({temperature})}
          value={this.state.temperature}
        />
        <Text>Sugar</Text>
        <TextInput
          style={styles.form_input}
          onChangeText={(sugar) => this.setState({sugar})}
          value={this.state.sugar}
        />
        <Text>Pulse</Text>
        <TextInput
          style={styles.form_input}
          onChangeText={(pulse) => this.setState({pulse})}
          value={this.state.pulse}
        />
        <Text>Notes</Text>
        <TextInput
          style={styles.form_input}
          onChangeText={(notes) => this.setState({notes})}
          value={this.state.notes}
        />
        <Button
          title="Update!"
          onPress={this.buttonClicked}
          accessibilityLabel="Learn more about this purple button">
          Press Me!
        </Button>
      </View>
    );
  }
}
export default VitalsUpdateScreen;
