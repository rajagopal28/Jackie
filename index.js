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

 const App = StackNavigator({
   Home: {screen : HomeScreen},
   UserHome: {screen : UserHomeScreen},
   UserLogin: { screen: UserLoginScreen },
   OutPatients: { screen: OutPatientScreen },
   DoctorAppointmets: { screen: DoctorAppointmetScreen },
   VitalsUpdate: { screen: VitalsUpdateScreen }
 });

AppRegistry.registerComponent('Jackie', () => App);
