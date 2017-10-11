import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  Text,
  View,
  Button
} from 'react-native';

import HomeStyles from '../styles/app-styles';

const styles = HomeStyles;

const os = Platform.select({
  ios: 'Apple',
  android: 'Android',
});
class HomeScreen extends Component {
   static navigationOptions = {
     title: 'Welcome',
   };
   constructor() {
     super();
   }
   async loadFromSettings() {
     const { navigate } = this.props.navigation;
     const loggedInUserStr = await AsyncStorage.getItem('LoggedInUser');
     if (loggedInUserStr) {
       // redirect to doctor_appointments
      console.log(loggedInUserStr);
      let loggedInUser = JSON.parse(loggedInUserStr);
      if(loggedInUser && loggedInUser.user) {
        navigate('UserHome', {userId: loggedInUser.user.id});
      }
      if(loggedInUser && loggedInUser.doctor) {
        navigate('DoctorHome', {doctorId: loggedInUser.doctor.id});
      }
     }
   }
   componentDidMount() {
     this.loadFromSettings();
   }
   render() {
     const { navigate } = this.props.navigation;
     const {state} = this.props.navigation;
     // , {userId: this.state.loggedInUser.user.id}
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>
           Meet Jakie! Your Personal Health Assistant!
         </Text>
         <Text style={styles.instructions}>
              Please Login to Access features from your {os} device!
         </Text>
         <View
         style={styles.buttonMargin}>
           <Button
             title="UserLogin"
             style={styles.buttonMargin}
             onPress={() =>
               navigate('UserLogin')
             }
           />
        </View>
         <View
         style={styles.buttonMargin}>
           <Button
             title="DoctorLogin"
             onPress={() =>
               navigate('DoctorLogin')
             }
           />
         </View>
       </View>
     );
   }
 }

 export default HomeScreen;
