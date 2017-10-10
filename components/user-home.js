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

const styles = HomeStyles;

class UserHomeScreen extends Component {
   static navigationOptions = {
      title: 'Welcome',
      header: {
        left: null,
      }
   };
   constructor() {
     super();
   }
   logoutUser() {
       AsyncStorage.removeItem('LoggedInUser');
       if (this.props.navigator && this.props.navigator.getCurrentRoutes() > 1) {
        console.log("pop");
        this.props.navigator.pop();
    }
       return false;
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
           title="DoctorAppointments"
           onPress={() =>
             navigate('DoctorAppointments', state.params)
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
             navigate('MedicineIntake', state.params)
           }
         />
         <Button
           title="Logout"
           onPress={this.logoutUser.bind(this)}
         />
       </View>
     );
   }
 }
 export default UserHomeScreen;
