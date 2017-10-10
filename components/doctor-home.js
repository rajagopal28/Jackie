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

class DoctorHomeScreen extends Component {
   static navigationOptions = {
      title: 'Welcome Doctor',
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
           title="View visiting Patients"
           onPress={() =>
             navigate('OutPatients', state.params)
           }
         />
         <Button
           title="Your Appointmets"
           onPress={() =>
             navigate('DoctorAppointmets', state.params)
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
