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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
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
           Welcome to React Native!
         </Text>
         <Text style={styles.instructions}>
           To get started, edit index.android.js
         </Text>
         <Text style={styles.instructions}>
           Double tap R on your keyboard to reload,{'\n'}
           Shake or press menu button for dev menu
         </Text>
         <Button
           title="UserLogin"
           onPress={() =>
             navigate('UserLogin')
           }
         />
         <Button
           title="DoctorLogin"
           onPress={() =>
             navigate('DoctorLogin')
           }
         />
       </View>
     );
   }
 }

 export default HomeScreen;
