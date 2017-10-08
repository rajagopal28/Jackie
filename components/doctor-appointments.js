
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView
} from 'react-native';

import UserService from '../services/user-service';
import DoctorAppointmentRow from './rows/doctor-appointment-item';

class DoctorAppointmetScreen extends Component {
  static navigationOptions = {
    title: 'Doctor Appointments',
  };
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }
  componentDidMount(){
      this.loadJSONData();
  }
  loadJSONData() {
    _this = this;
    UserService.getDoctorAppointments((dps) => {
      _this.setState({ dataSource: this.state.dataSource.cloneWithRows(dps)});
    });
  }
  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(da) => <DoctorAppointmentRow {...da} />}
      />
    );
  }
}
const styles = StyleSheet.create({
   list: {
          justifyContent: 'space-around',
          flexWrap: 'wrap'
      }
});
export default DoctorAppointmetScreen;
