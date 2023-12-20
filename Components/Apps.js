import React from 'react';
import {StyleSheet, View} from 'react-native';
import StartGameScreen from '../Screens/StartGameScreen';

const Apps = () => {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
};

export default Apps;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor:"#ddb52f"
  },
});
