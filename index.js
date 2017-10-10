import { AppRegistry } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import UserLoginScreen from './components/user-login';
import UserHomeScreen from './components/user-home';
import HomeScreen from './components/home';
import DoctorAppointmentScreen from './components/doctor-appointments';
import OutPatientScreen from './components/out-patients';
import VitalsUpdateScreen from './components/vital-update';
import VitalLogScreen from './components/vital-logs';
import PrescribedMedicinesScreen from './components/prescribed-medicines';
import MedicineIntakeScreen from './components/medicine-intake';
import DoctorLoginScreen from './components/doctor-login';
import DoctorHomeScreen from './components/doctor-home';
// var PushNotification = require('react-native-push-notification');
import PushNotification from 'react-native-push-notification';


PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

    // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
    senderID: "YOUR GCM SENDER ID",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
});
 const App = StackNavigator({
   Home: {screen : HomeScreen},
   UserHome: {screen : UserHomeScreen},
   UserLogin: { screen: UserLoginScreen },
   OutPatients: { screen: OutPatientScreen },
   DoctorAppointments: { screen: DoctorAppointmentScreen },
   VitalsUpdate: { screen: VitalsUpdateScreen },
   VitalLogs: { screen: VitalLogScreen },
   PrescribedMedicines: { screen: PrescribedMedicinesScreen },
   MedicineIntake: { screen: MedicineIntakeScreen },
   DoctorLogin: { screen: DoctorLoginScreen },
   DoctorHome: {screen : DoctorHomeScreen}
 });

AppRegistry.registerComponent('Jackie', () => App);
