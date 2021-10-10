/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';


class ApplicationLocked extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            marginTop: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.passCodeText}> Maximum attempts reached </Text>
          </View>
        </View>
        <View>
          <Text style={styles.timeText}> 4 : 57 </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.buttons}>
            <View>
              <Text style={styles.quitText}>Quit</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
export default ApplicationLocked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  passCodeText: {
    fontFamily: 'Roboto-Italic',
    fontSize: 25,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginTop: -100,
  },

  buttons: {
    alignItems: 'center',
    marginRight: 65,
    marginLeft: 155,
    color: '#b4bbbe',
    backgroundColor: '#0ba39c',
    height: 60,
    width: 150,
    marginBottom: -50,
  },
  quitText: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    letterSpacing: 0.34,
    color: 'black',
    textAlign:'center',
    
  },

  timeText: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginTop: -200,
    marginLeft: 170,
  },
   
});
