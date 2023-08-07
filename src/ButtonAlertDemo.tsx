import React from 'react';
import { StyleSheet, View, Text, Alert, Button } from 'react-native';

const ButtonAlertDemo = () => {

  const handleButtonPress = () => {
    Alert.alert(
      'Title',
      'Content',
      [
        {
          text: 'Cancel',
          onPress: ()=>console.log('cancel'),
          style: 'destructive'
        },
        {
          text: 'OK',
          onPress: ()=>console.log('Ok'),
          style: 'default'
        }
        // 可以添加多个button,并且有顺序
      ]
    )
  };

  return (
    <View style={styles.ButtonContainer}>
      <Button 
        color={'white'}
        title="Click me"
        onPress={()=>alert('Hello, I am Chen Siyu')}  
      />

      <Button 
        color={'white'}
        title="Click me again"
        onPress={()=>Alert.alert('Hello, I am Chen Siyu')}   // Alert.alert的弹框没有Alert字样的title
      />

      <Button 
        color={'white'}
        title="Alert with button"
        onPress={handleButtonPress}  
      />
    </View>
  );
}

export default ButtonAlertDemo;

const styles = StyleSheet.create({
  ButtonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'lightpink',
    padding: 2,
  },
});
