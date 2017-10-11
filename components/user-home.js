import React, { Component } from 'react';
import {
  AsyncStorage,
  ToastAndroid,
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
      title: 'Welcome'
   };
   constructor() {
     super();
   }
   logoutUser() {
       AsyncStorage.removeItem('LoggedInUser');
       ToastAndroid.show('Logged out user..', ToastAndroid.SHORT);
       this.props.navigation.goBack(null);
       return false;
   }
   render() {
     const {state} = this.props.navigation;
     console.log("PROPS " + JSON.stringify(state.params));
     const { navigate } = this.props.navigation;
     return (
       <View style={styles.container}>
        <View
        style={styles.buttonMargin}>
          <Button
          title="View visiting Doctors"
          onPress={() =>
           navigate('OutPatients', state.params)
          }
          />
        </View>
        <View
        style={styles.buttonMargin}>
         <Button
           title="DoctorAppointments"
           onPress={() =>
             navigate('DoctorAppointments', state.params)
           }
         />
        </View>
        <View
        style={styles.buttonMargin}>
         <Button
           title="View Vitals"
           onPress={() =>
             navigate('VitalLogs', state.params)
           }
         />
        </View>
        <View
        style={styles.buttonMargin}>
         <Button
           title="Log Vitals"
           onPress={() =>
             navigate('VitalsUpdate', state.params)
           }
         />
        </View>
        <View
        style={styles.buttonMargin}>
         <Button
           title="Today's Medicines"
           onPress={() =>
             navigate('PrescribedMedicines', state.params)
           }
         />
        </View>
        <View
        style={styles.buttonMargin}>
         <Button
           title="Update Medicine Intake"
           onPress={() =>
             navigate('MedicineIntake', state.params)
           }
         />
        </View>
        <View
        style={styles.buttonMargin}>
         <Button
           title="Logout"
           onPress={this.logoutUser.bind(this)}
         />
        </View>
      </View>
     );
   }
 }
 export default UserHomeScreen;
