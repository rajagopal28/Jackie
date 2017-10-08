import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

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
