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

class DoctorHomeScreen extends Component {
   static navigationOptions = {
      title: 'Welcome Doctor'
   };
   constructor() {
     super();
   }
   logoutUser() {
       AsyncStorage.removeItem('LoggedInUser');
       ToastAndroid.show('logged out doctor', ToastAndroid.SHORT);
       this.props.navigation.goBack(null);
       return false;
   }
   render() {
     const {state} = this.props.navigation;
     console.log("PROPS " + JSON.stringify(state.params));
     const { navigate } = this.props.navigation;
     return (
       <View style={styles.container}>
         <Button
           title="View visiting Patients"
           onPress={() =>
             navigate('OutPatients', state.params)
           }
         />
         <Button
           title="Your Appointmets"
           onPress={() =>
             navigate('DoctorAppointments', state.params)
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
 export default DoctorHomeScreen;
