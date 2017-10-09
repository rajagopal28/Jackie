import { AppRegistry } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import UserLoginScreen from './components/user-login';
import UserHomeScreen from './components/user-home';
import  HomeScreen from './components/home';
import  DoctorAppointmetScreen from './components/doctor-appointments';
import  OutPatientScreen from './components/out-patients';
import  VitalsUpdateScreen from './components/vital-update';
import  VitalLogScreen from './components/vital-logs';
import  PrescribedMedicinesScreen from './components/prescribed-medicines';
import  MedicineIntakeScreen from './components/medicine-intake';

 const App = StackNavigator({
   Home: {screen : HomeScreen},
   UserHome: {screen : UserHomeScreen},
   UserLogin: { screen: UserLoginScreen },
   OutPatients: { screen: OutPatientScreen },
   DoctorAppointmets: { screen: DoctorAppointmetScreen },
   VitalsUpdate: { screen: VitalsUpdateScreen },
   VitalLogs: { screen: VitalLogScreen },
   PrescribedMedicines: { screen: PrescribedMedicinesScreen },
   MedicineIntake: { screen: MedicineIntakeScreen }
 });

AppRegistry.registerComponent('Jackie', () => App);
