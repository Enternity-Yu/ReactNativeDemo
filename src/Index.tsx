import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonAlertDemo from "./ButtonAlertDemo";

const Index = () => {
  return (
    <View style={styles.IndexContainer}>
      <Text style={styles.IndexText}>I'm learning React Native.</Text>
      <ButtonAlertDemo />
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  IndexContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  IndexText: {
    backgroundColor: 'lightyellow',
    padding: 5,
  },
});




