
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
import MedicineIntakeItemRow from './rows/medicine-intake-item';

import AppUtils from '../utils/app-utils';

const styles = ListViewStyles;
class MedicineIntakeScreen extends Component {
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
  addMedicineIntakeLog(prescribedMedicine) {
    console.log('Recieved Item..', JSON.stringify(prescribedMedicine));
    const {state} = this.props.navigation;
    let params = {};
    params.user_id = state.params.userId;
    params.prescribed_medicine_id = prescribedMedicine.id;
    params.logged_on = AppUtils.getFormattedDateString();
    params.part_of_day = AppUtils.getPartOfTheDay();
    params.notes = `Updating from App For: ${prescribedMedicine.medicine.name} at:${params.part_of_day}`;
    console.log('Constructed med intake..', JSON.stringify(params));
    UserService.logMedicineIntake(params, (res) => {
      console.log('Logged Med intake', res);
    });
  }
  loadJSONData(params) {
    _this = this;
    UserService.getFilteredPrescribedMedicines(params, (dps) => {
      _this.setState({ dataSource: this.state.dataSource.cloneWithRows(dps)});
    });
  }
  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(da) => <MedicineIntakeItemRow {...da} onToggleClicked={this.addMedicineIntakeLog.bind(this)}/>}
      />
    );
  }
}
export default MedicineIntakeScreen;
