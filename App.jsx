import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Import Komponen yang diperlukan
import KomponenKotak from './src/KomponenKotak';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.kotak}></View>
      <Text style={styles.teks}>Belajar React Native - AhZanMC</Text>
      <Text style={styles.teks}>Jumlah Subs : 40rb</Text>
      {/* <KomponenKotak /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  kotak: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  teks: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
});
