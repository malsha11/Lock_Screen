/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
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
          <Text style={styles.timeText}> 04 : 57 </Text>
        </View>
        <View style={styles.circle}>
          <Image
            styles={styles.imageLocked}
            source={require('../assets/Images/Icon/Locked_icon.jpg')}
          />
        </View>
        <View>
          <Text style={styles.lockedText}>
          {'\n'}
            To protect your information, access {'\n'} has been locked for 5
            minutes. {'\n'} Come back later and try again.
          </Text>
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
    fontFamily: 'Roboto-black',
    fontSize: 27,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginTop: -10,
    marginBottom: 100,
  },

  buttons: {
    marginRight: 65,
    marginLeft: 155,
    color: '#b4bbbe',
    backgroundColor: '#0ba39c',
    height: 60,
    width: 150,
    marginBottom: 20,
    marginTop: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quitText: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    letterSpacing: 0.34,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeText: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginTop: 70,
    marginLeft: 170,
    marginBottom: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginLeft: 170,
  },

  lockedText: {
    fontFamily: 'Roboto-black',
    fontSize: 25,
    /*color: '#92969f',*/
    letterSpacing: 0.34,
    lineHeight: 20,
    marginTop: 150,
    marginBottom: 20,
    alignItems: 'center',

  },
  imageLocked: {
    width: 32,
    height: 35,
    marginLeft: 50,
    marginTop: 50,
  },
});
