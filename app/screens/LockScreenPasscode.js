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
        passcode:['1','','3','']
    };
  }

  render() {
      let numbers = [{id : 1},
        {id : 1},
        {id : 2},
        {id : 3},
        {id : 4},
        {id : 5},
        {id : 6},
        {id : 7},
        {id : 8},
        {id : 9},
        {id : 0}
    ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={{marginTop:100,alignItems:'center',justifyContent:'center',}}>
      <View>
          <Text style={styles.passCodeText}> Enter your PIN Code</Text>
      </View>
      <View style={styles.codeContainer}>
            {
                this.state.passcode.map(p => {
                    let style = p != '' ? styles.code2: styles.code1; 
                    return <View style={style}></View>;
                })}

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
    
  },
  passCodeText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
    color: '#0a191a',
    letterSpacing: 0.34,
    lineHeight: 25,
  },
  codeContainer:{
      marginTop:12,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
  },
  code1: {
      width:10,
      height:12,
      borderRadius:13,
      borderWidth:2,
      borderColor:'#1bddf2',
      margin:8,
      backgroundColor:'#1bddf2',

  },

  code2: {
    width:13,
    height:16,
    borderRadius:13,
    borderWidth:2,
    borderColor:'#0ba39c',
    margin:8,
    backgroundColor:'#0ba39c',

},
  number:{
      margin:8,
      width:75,
      height:75,
      borderRadius:75,
      backgroundColor:'rgba(255,255,255,0.1)',
      justifyContent:'center',
      alignItems:'center',
  },
  
});





