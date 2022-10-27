import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Header from './components/header';

export default function App() {
  return (
    <>
    <StatusBar style='light' backgroundColor={'#223'} translucent={false} />
    <View style={styles.container}>
      <Header />
      <View style={styles.mainBody}>
        <Text style={styles.text}>About To Fill This Space Up!!</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
