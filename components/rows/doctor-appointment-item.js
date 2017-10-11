import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ListViewStyles from '../../styles/list-view-styles';

const styles = ListViewStyles;

const DoctorAppointmentRow = (props) => (
  <View style={styles.row}>
    <Text style={styles.text}>
      {`User: ${props.user.first_name} ${props.user.last_name}`}
    </Text>
    <Text style={styles.text}>
      {`Regarding: ${props.description}`}
    </Text>
    <Text style={styles.text}>
      {`On: ${props.from} - ${props.to}`}
    </Text>
    <Text style={styles.text}>
      {`Doctor: ${props.doctor.first_name} ${props.doctor.last_name}`}
    </Text>
  </View>
);

export default DoctorAppointmentRow;
