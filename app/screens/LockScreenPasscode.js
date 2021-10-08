import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

class LockScreenPasscode extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
}
render() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={{marginTop:100,alignItems:'center',justifyContent:'center',}}>
      <View>
          <Text style={styles.passCodeText}> Enter your PIN Code</Text>
      </View>