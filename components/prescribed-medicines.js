
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
import PrescribedMedicineItemRow from './rows/prescribed-medicine-item';

const styles = ListViewStyles;
class PrescribedMedicinesScreen extends Component {
  static navigationOptions = {
    title: 'Today\'s Medicines',
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
    console.log("Loading Today's Medicines with... " + JSON.stringify(state.params));
    this.loadJSONData(state.params);
  }
  loadJSONData(params) {
    _this = this;
    UserService.getPrescribedMedicines(params, (dps) => {
      _this.setState({ dataSource: this.state.dataSource.cloneWithRows(dps)});
    });
  }
  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(da) => <PrescribedMedicineItemRow {...da} />}
      />
    );
  }
}
export default PrescribedMedicinesScreen;
