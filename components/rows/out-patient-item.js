import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ListViewStyles from '../../styles/list-view-styles';

const styles = ListViewStyles;

class OutPatientRow extends Component {
    constructor(props) {
        super(props);
    }

    goToUserHome() {
      console.log('touched item...');
      this.props.navigateToUserActions(this.props);
    }

    render() {
      let props = this.props;
        return (
          <View style={styles.row}>
            <TouchableOpacity  onPress={this.goToUserHome.bind(this)}>
              <Text style={styles.text}>
                {`Patient: ${props.user.first_name} ${props.user.last_name}`}
              </Text>
              <Text style={styles.text}>
                {`Visiting since: ${props.visting_since}`}
              </Text>
              <Text style={styles.text}>
                {`Status: ${props.status}`}
              </Text>
              <Text style={styles.text}>
                {`For Practice: ${props.for_practice}`}
              </Text>
              <Text style={styles.text}>
                {`Doctor: ${props.doctor.first_name} ${props.doctor.last_name}`}
              </Text>
            </TouchableOpacity>
          </View>
        );
    }
}
export default OutPatientRow;
