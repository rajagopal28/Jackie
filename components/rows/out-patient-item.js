import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ListViewStyles from '../../styles/list-view-styles';

const styles = ListViewStyles;

const OutPatientRow = (props) => (
  <View style={styles.container}>
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
  </View>
);

export default OutPatientRow;