import { AppRegistry } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import UserLoginScreen from './components/user-login';
import  HomeScreen from './components/home';

 const App = StackNavigator({
   Home: {screen : HomeScreen},
   UserLogin: { screen: UserLoginScreen }
 });

AppRegistry.registerComponent('Jackie', () => App);
