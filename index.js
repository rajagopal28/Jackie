import { AppRegistry } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import UserLoginScreen from './components/user-login';
import  HomeScreen from './components/home';
import  DoctorAppointmetScreen from './components/doctor-appointments';

 const App = StackNavigator({
   Home: {screen : HomeScreen},
   UserLogin: { screen: UserLoginScreen },
   DoctorAppointmets: { screen: DoctorAppointmetScreen }
 });

AppRegistry.registerComponent('Jackie', () => App);
