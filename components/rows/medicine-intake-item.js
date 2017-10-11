import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';

import ListViewStyles from '../../styles/list-view-styles';

const styles = ListViewStyles;

class MedicineIntakeItemRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toggledOn : false
        };
    }

    onToggleTouched() {
        this.props.onToggleClicked(this.props);
        let toggle = this.state.toggledOn;
        this.setState({toggledOn: !toggle});
    }

    render() {
      let props = this.props;
        return (
          <View style={styles.row}>
            <Text style={styles.text}>
              {`Medicine: ${props.medicine.name}`}
            </Text>
            <Text style={styles.text}>
              {`Prescription: ${props.prescription.notes}`}
            </Text>
            <Text style={styles.text}>
              {`Notes: ${props.notes}`}
            </Text>
            <Text style={styles.text}>
              Toggle on taking the medicine!
            </Text>
            <Switch
              onValueChange={this.onToggleTouched.bind(this)}
              value={this.state.toggledOn}
              disabled={this.state.toggledOn}/>
          </View>
        );
    }
}
export default MedicineIntakeItemRow;
