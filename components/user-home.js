import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import HomeStyles from '../styles/app-styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const styles = HomeStyles;

class UserHomeScreen extends Component {
   static navigationOptions = {
     title: 'Welcome',
   };
   constructor() {
     super();
   }
   render() {
     const {state} = this.props.navigation;
     console.log("PROPS " + JSON.stringify(state.params));
     const { navigate } = this.props.navigation;
     return (
       <View style={styles.container}>
         <Button
           title="View visiting Doctors"
           onPress={() =>
             navigate('OutPatients', state.params)
           }
         />
         <Button
           title="View Vitals"
           onPress={() =>
             navigate('VitalLogs', state.params)
           }
         />
         <Button
           title="Log Vitals"
           onPress={() =>
             navigate('VitalsUpdate', state.params)
           }
         />
         <Button
           title="Today's Medicines"
           onPress={() =>
             navigate('PrescribedMedicines', state.params)
           }
         />
         <Button
           title="Update Medicine Intake"
           onPress={() =>
             navigate('DoctorAppointmets', state.params)
           }
         />
       </View>
     );
   }
 }
 export default UserHomeScreen;
