/* eslint-disable react-native/no-inline-styles */
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
  Alert,
  Image,
} from 'react-native';

class LockScreenPasscode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keycode: ['', '', '', ''],
    };
    this.state.keycode;
  }

  numberOnPress = num => {
    let tempCode = this.state.keycode;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    this.setState({keycode: tempCode});
  };

  cancelOnPress = () => {
    let tempCode = this.state.keycode;
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    this.setState({keycode: tempCode});
  };

  popUpMessageBox = () => {
    let text = this.state.keycode.toString();
    if (text == '1,2,3,4') {
      Alert.alert('Success!..', ' App will redirect you to the home now!', [
        {text: 'ok.'},
      ]);
    } else {
      for (var i = 1; i <= 3; i++) {
        if (text != '1,2,3,4') {
          Alert.alert('Retry!..', ' Please enter your PIN Again!', [
            {text: 'ok.'},
          ]);
        }
      }
    }
  };

  render() {
    let numbers = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 0},
    ];
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
            <Text style={styles.passCodeText}> Enter your PIN Code</Text>
          </View>
          <View style={styles.codeContainer}>
            {this.state.keycode.map(p => {
              let style = p != '' ? styles.code2 : styles.code1;
              return <View style={style} />;
            })}
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.numberContainer}>
            {numbers.map(num => {
              return (
                <TouchableHighlight
                  style={styles.number}
                  key={num.id}
                  underlayColor="#6ec8c9"
                  activeOpacity={0.5}
                  onPress={() => this.numberOnPress(num.id)}>
                  <Text style={styles.numText}> {num.id} </Text>
                </TouchableHighlight>
              );
            })}
            <View style={styles.deleteButton}>
              <TouchableOpacity onPress={() => this.cancelOnPress()}>
                <Image
                  styles={styles.image}
                  source={require('../assets/Images/Icon/cansel_button.jpg')}
                />
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
              <TouchableHighlight
                underlayColor="#F3F3F3"
                onPress={() => this.popUpMessageBox()}
                activeOpacity={0.5}
                style={styles.okbutton}>
                <Text style={styles.okbuttonText}>OK</Text>
              </TouchableHighlight>
            </View>
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
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  passCodeText: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginTop: 10,
  },
  codeContainer: {
    marginTop: 145,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -150,
  },
  code1: {
    width: 10,
    height: 12,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#1bddf2',
    margin: 8,
    backgroundColor: '#1bddf2',
  },

  code2: {
    width: 12,
    height: 14,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#0ba39c',
    margin: 8,
    backgroundColor: '#0ba39c',
  },
  number: {
    margin: 8,
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: '#f0f3fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 58,
    width: 282,
    height: 348,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0a191a',
  },
  numText: {
    fontFamily: 'Roboto-Black',
    fontSize: 36,
    color: '#92969f',
    letterSpacing: 0,
    textAlign: 'center',
  },

  deleteButton: {
    /*flexDirection:'row',*/
    alignItems: 'center',
    marginRight: -65,
    color: '#b4bbbe',
  },
  deleteText: {
    fontFamily: 'Roboto-Black',
    fontSize: 15,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginTop: -5,
    marginLeft: 15,
    color: '#b4bbbe',
  },

  image: {
    width: 32,
    height: 35,
    marginLeft: 50,
    marginTop: 50,
    color: 'yellow',
  },
  okbutton: {
    alignItems: 'center',
    /*marginLeft: '-65',*/
    color: '#b4bbbe',
    marginRight: -10,

  },
  okbuttonText: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    color: '#92969f',
    letterSpacing: 0,
    textAlign: 'center',
  },
});
