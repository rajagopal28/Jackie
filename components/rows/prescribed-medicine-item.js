import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ListViewStyles from '../../styles/list-view-styles';

const styles = ListViewStyles;

const PrescribedMedicineItemRow = (props) => (
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
      {`Morning: ${props.before_breakfast ? 'Before Breakfast' : ''}  ${props.after_breakfast ? 'After Breakfast' : ''}`}
    </Text>
    <Text style={styles.text}>
      {`Noon: ${props.before_lunch ? 'Before Lunch' : ''}  ${props.after_lunch  ? 'After Lunch' : ''}`}
    </Text>
    <Text style={styles.text}>
      {`Evening: ${props.before_dinner ? 'Before Dinner' : ''}  ${props.after_dinner ? 'After Dinner' : ''}`}
    </Text>
  </View>
);

export default PrescribedMedicineItemRow;
