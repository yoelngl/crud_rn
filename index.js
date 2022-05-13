import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

axios.defaults.baseURL = 'https://8984-36-71-136-128.ngrok.io/api/'

AppRegistry.registerComponent(appName, () => App);
