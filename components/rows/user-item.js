import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ListViewStyles from '../../styles/list-view-styles';

const styles = ListViewStyles;

const UserItemRow = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`${props.first_name} ${props.last_name}`}
    </Text>
    <Text style={styles.text}>
      {`${props.address}, ${props.city}`}
    </Text>
  </View>
);

export default UserItemRow;
