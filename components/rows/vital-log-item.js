import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ListViewStyles from '../../styles/list-view-styles';

const styles = ListViewStyles;

const VitalLogItemRow = (props) => (
  <View style={styles.row}>
    <Text style={styles.text}>
      {`User: ${props.user.first_name} ${props.user.last_name}`}
    </Text>
    <Text style={styles.text}>
      {`Pressure: ${props.pressure}`}
    </Text>
    <Text style={styles.text}>
      {`Sugar: ${props.sugar}`}
    </Text>
    <Text style={styles.text}>
      {`Temperature: ${props.temperature}`}
    </Text>
    <Text style={styles.text}>
      {`Pulse: ${props.pulse}`}
    </Text>
    <Text style={styles.text}>
      {`Logged On: ${props.logged_on}`}
    </Text>
  </View>
);

export default VitalLogItemRow;
