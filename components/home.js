import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  Text,
  View,
  Button,
  ToastAndroid
} from 'react-native';

// var PushNotification = require('react-native-push-notification');
import PushNotification from 'react-native-push-notification';

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
   async saveGCMID(token) {
     console.log( 'TOKEN:', token );
     if(token && token.token) {
       AsyncStorage.setItem('DeviceGCMID', token.token);
     }
     ToastAndroid.show('onRegister, Loaded DeviceGCMID', ToastAndroid.SHORT);
   }
   loadGCMId() {
     let _this = this;
     PushNotification.configure({
         // (optional) Called when Token is generated (iOS and Android)
         onRegister: function(token) {
           _this.saveGCMID(token);
         },
         // (required) Called when a remote or local notification is opened or received
         onNotification: function(notification) {
             console.log( 'NOTIFICATION:', notification );
             if(notification['gcm.notification.title']) {
               PushNotification.localNotification({
                 "title" : notification['gcm.notification.body'],
                 "message" : notification['gcm.notification.title']
               });
             }
         },
         // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
         senderID: "426278808874"
     });
   }
   componentDidMount() {
     this.loadGCMId();
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
