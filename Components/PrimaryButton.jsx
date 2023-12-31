import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const PrimaryButton = ({children}) => {
  function pressHandler() {
    console.log('pressed');
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color: '#640233'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow:'hidden',
       
    },

  buttonInnerContainer: {
    backgroundColor: '#4e0329',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
