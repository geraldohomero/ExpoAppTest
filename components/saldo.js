import React from 'react'
import {StyleSheet, Text} from 'react-native'

const Saldo = (props) => {

  return (
     <Text style={styles.text}> Saldo: {props.Valor} </Text>
  );

}

const styles = StyleSheet.create({
    text: {
    color:'white',
    fontSize:20,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold'
  }
})

export default Saldo;