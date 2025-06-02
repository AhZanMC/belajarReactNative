import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Import Komponen yang diperlukan
import KomponenKotak from './src/KomponenKotak';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Kotak di kiri */}
      <View style={styles.kotak} />

      {/* Teks di kanan */}
      <View style={styles.teksWrapper}>
        <Text style={styles.nama}>Hai, aku Fauzan</Text>
        <Text style={styles.role}>Cuma Manusia Biasa :v</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',      // Susun horizontal: kotak di kiri, teks di kanan
    alignItems: 'center',      // Biar rata tengah secara vertikal
    padding: 16,
    backgroundColor: '#f2f2f2',
    flex: 1,                   // Biar mengisi seluruh layar
    justifyContent: 'center', // Biar kotak di kiri
  },
  kotak: {
    width: 60,
    height: 60,
    backgroundColor: 'skyblue',
    borderRadius: 8,
    marginRight: 12,
  },
  teksWrapper: {
    flexDirection: 'column',   // Susun teks secara vertikal
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#666',
  },
});