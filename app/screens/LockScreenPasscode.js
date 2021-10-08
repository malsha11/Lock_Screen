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

  render() 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={{marginTop:100,alignItems:'center',justifyContent:'center',}}>
      <View>
          <Text style={styles.passCodeText}> Enter your PIN Code</Text>
      </View>
     
           
        </View>
        </SafeAreaView>
    );
  }
}
export default LockScreenPasscode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  passCodeText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
    color: '#0a191a',
    letterSpacing: 0.34,
    lineHeight: 25,
  },
  