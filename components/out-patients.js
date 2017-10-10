
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
  navigateToUserActions() {
    const { navigate, state } = this.props.navigation;
    if(state.params.doctorId) {
      navigate('UserHome', state.params);
    }
  }
  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(da) => <OutPatientRow {...da} navigateToUserActions={this.navigateToUserActions.bind(this)} />}
      />
    );
  }
}
export default OutPatientScreen;
