
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
import DoctorService from '../services/doctor-service';
import DoctorNotificationItemRow from './rows/doctor-notification-item';

const styles = ListViewStyles;

class DoctorNotificationScreen extends Component {
  static navigationOptions = {
    title: 'Doctor Notifications',
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
    DoctorService.getDoctorNotifications(params, (dps) => {
      _this.setState({ dataSource: this.state.dataSource.cloneWithRows(dps)});
    });
  }
  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(da) => <DoctorNotificationItemRow {...da} />}
      />
    );
  }
}
export default DoctorNotificationScreen;
