import { AppRegistry } from 'react-native';

import {
  StackNavigator
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
import DoctorNotificationScreen from './components/doctor-notifications';

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
   DoctorHome: {screen : DoctorHomeScreen},
   DoctorNotifications: {screen : DoctorNotificationScreen}
 });

AppRegistry.registerComponent('Jackie', () => App);
