import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ListViewStyles from '../../styles/list-view-styles';

const styles = ListViewStyles;

const DoctorNotificationItemRow = (props) => (
  <View style={styles.row}>
    <Text style={styles.text}>
      {`User: ${props.user.first_name} ${props.user.last_name}`}
    </Text>
    <Text style={styles.text}>
      {`About: ${props.title}`}
    </Text>
    <Text style={styles.text}>
      {`Notified on: ${props.notified_on}`}
    </Text>
    <Text style={styles.text}>
      {`Severity: ${props.severity}`}
    </Text>
    <Text style={styles.text}>
      {`Notes: ${props.notes}`}
    </Text>
  </View>
);

export default DoctorNotificationItemRow;
