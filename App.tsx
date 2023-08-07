import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from "./src/Index";

export default function App() {
  const test = 'test'
  return (
    <View style={styles.container}>
      <Index />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: 'lightblue',
    alignItems: 'center',  
    // justifyContent: 'center',
    marginTop: 50,
  },
});


