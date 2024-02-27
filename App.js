import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your gdgdsgsadfasf!</Text>
      <View style={styles.subcontainer}>
        이것은 view 안의 view이다.
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  text: {
    color: 'red',
  },
  subcontainer: {
    width: '100%',
    border: '1px solid black',
  }
});
