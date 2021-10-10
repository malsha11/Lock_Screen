import React, {Component} from 'react';
import {Text, View} from 'react-native';
/*import LockScreenPasscode from '../app/screens/LockScreenPasscode';*/
import ApplicationLocked from '../app/screens/ApplicationLocked';


export default class Root extends Component {
  render() {
    return (
      /*<LockScreenPasscode/>*/
      <ApplicationLocked></ApplicationLocked>
    );
  }
}