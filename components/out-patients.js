
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
import OutPatientRow from './rows/out-patient-item';

const styles = ListViewStyles;
class OutPatientScreen extends Component {
  static navigationOptions = {
    title: 'Out Patients',
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
    console.log("Loading in-patients with... " + JSON.stringify(state.params));
    this.loadJSONData(state.params);
  }
  loadJSONData(params) {
    _this = this;
    UserService.getOutPatients(params, (dps) => {
      _this.setState({ dataSource: this.state.dataSource.cloneWithRows(dps)});
    });
  }
  navigateToUserHome(clickedItem) {
    const { navigate, state } = this.props.navigation;
    console.log('in navigateToUserHome', JSON.stringify(state.params));
    if(state.params.doctorId && !state.params.userId) {
      var params = state.params;
      params.userId = clickedItem.user.id;
      navigate('UserHome', params);
    }
  }
  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(da) => <OutPatientRow {...da} navigateToUserActions={this.navigateToUserHome.bind(this)} />}
      />
    );
  }
}
export default OutPatientScreen;
