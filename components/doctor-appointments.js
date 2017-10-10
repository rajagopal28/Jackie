
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView
} from 'react-native';

import ListViewStyles from '../styles/list-view-styles';
import UserService from '../services/user-service';
import DoctorAppointmentRow from './rows/doctor-appointment-item';

const styles = ListViewStyles;

class DoctorAppointmentScreen extends Component {
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
    const {state} = this.props.navigation;
    console.log("Loading Appointments with... " + JSON.stringify(state.params));
    this.loadJSONData(state.params);
  }
  loadJSONData(params) {
    _this = this;
    UserService.getDoctorAppointments(params, (dps) => {
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
export default DoctorAppointmentScreen;
