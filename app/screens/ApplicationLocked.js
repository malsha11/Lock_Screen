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

/*create a Application Locaked class*/
class ApplicationLocked extends Component {
  /*constructor*/
  constructor(props) {
    super(props);
    this.state = {
      minutes: 1,
      seconds: 0,
    };
  }
  /* Time Count*/
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const {seconds, minutes} = this.state;
      if (seconds > 0) {
        this.setState(({seconds}) => ({
          seconds: seconds - 1,
        }));
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({minutes}) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            marginTop: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.reachedText}> Maximum attemps reached</Text>
          </View>
          <View
            style={{
              marginTop: 60,
              borderColor: 'rgb(230, 231, 233)',
              borderRadius: 4,
              borderWidth: 2,
              paddingBottom: 10,
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 10,
            }}>
            <Text
              accessible={true}
              allowFontScaling={true}
              ellipsizeMode="tail"
              style={{
                color: '#445878',
                fontFamily: 'Courier',
                fontSize: 28,
              }}>
              {this.state.minutes}:
              {this.state.seconds < 10 ? '0' : this.state.seconds}
            </Text>
          </View>
          <View
            style={{
              marginTop: 90,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../assets/Images/Icon/Locked_icon.jpg')} />
          </View>
          <View>
            <Text style={styles.lockedText}>
              {'\n'}
              To protect your information, access {'\n'} has been locked for 5
              minutes. {'\n'} Come back later and try again.
            </Text>
          </View>
          <TouchableOpacity TouchableOpacity={0.5} style={styles.buttons}>
            <Text style={styles.quitText}>Quit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default ApplicationLocked;

/* style sheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  reachedText: {
    fontFamily: 'Roboto-black',
    fontSize: 27,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginTop: 150,
    marginBottom: 30,
  },

  buttons: {
    backgroundColor: '#85c6c7',
    height: 60,
    width: 150,
    marginBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quitText: {
    fontFamily: 'Roboto-Black',
    fontSize: 23,
    letterSpacing: 0.34,
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeText: {
    fontFamily: 'Roboto-Black',
    fontSize: 30,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 100,
    marginTop: 70,
    marginLeft: 180,
    marginBottom: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lockedText: {
    fontFamily: 'Roboto-black',
    fontSize: 23,
    color: '#3d3d38',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginTop: 150,
    marginBottom: 70,
    alignItems: 'center',
  },
  imageLocked: {
    width: 100,
    height: 100,
    marginLeft: 50,
    marginTop: 40,
    marginBottom: 100,
  },
});
