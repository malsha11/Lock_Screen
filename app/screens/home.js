/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ['', '', '', ''],
    };
  }
  _onPressNumber = no => {
    let tempCode = this.state.password;
    for (let i = 0; i < tempCode.length; i++) {
      if (tempCode[i] === '') {
        tempCode[i] = no;
        break;
      } else {
        continue;
      }
    }
    this.setState({password: tempCode});
  };

  _onPressCancel = () => {
    let tempCode = this.state.password;
    for (let i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    this.setState({password: tempCode});
  };

  _popUpMsg = () => {
    let text = this.state.password.toString();
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
    let no = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: '0'},
    ];
    return (
      <View>
        <View>
          <Text style={styles.passwordText}> Enter your PIN Code </Text>
        </View>
        <View style={styles.pinMain}>
          {this.state.password.map(p => {
            let style = p != '' ? styles.Pin2 : styles.Pin1;
            return <View style={style} />;
          })}
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.numbersContainer}>
            {no.map(no => {
              return (
                <TouchableHighlight
                  activeOpacity={0.5}
                  underlayColor="#80e9d8"
                  style={styles.number}
                  key={no.id}
                  onPress={() => this._onPressNumber(no.id)}>
                  <Text style={styles.numberText}>{no.id}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this._onPressCancel()}
            style={{
              position: 'absolute',
              width: 65,
              height: 80,
              top: 310,
              right: 60,
              justifyContent: 'center',
            }}>
            <Icon name="backspace" size={40} color="#d1dee3">
              <Text style={{fontSize: 15}}> delete </Text>
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    passwordText: {
      fontSize: 30,
      color: '#a6d8e8',
      textAlign: 'center',
      marginTop: 65,
      fontFamily: 'Roboto-Bold',
    },
    pinMain: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
    Pin1: {
      width: 12,
      height: 12,
      borderRadius: 13,
      borderWidth: 1,
      borderColor: '#80e9d8',
      margin: 10,
    },
    Pin2: {
      backgroundColor: '#80e9d8',
      width: 12,
      height: 12,
      borderRadius: 13,
      borderWidth: 1,
      borderColor: '#80e9d8',
      margin: 10,
    },
    number: {
      width: 75,
      height: 75,
      borderRadius: 75,
      margin: 8,
      backgroundColor: '#a6d8e8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    numbersContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 25,
      width: 282,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText: {
      fontFamily: 'Roboto-Bold',
      fontSize: 35,
      color: 'white',
      letterSpacing: 0,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  
  