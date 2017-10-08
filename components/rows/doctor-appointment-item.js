import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderWidth: 1
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
});

const DoctorAppointmentRow = (props) => (
  <View style={styles.container}>
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
