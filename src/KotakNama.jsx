import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function KotakNama({ nama }) {
  return (
    <View style={styles.container}>
      <View style={styles.kotak} />
      <View>
        <Text style={styles.nama}>{nama}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  kotak: {
    width: 60,
    height: 60,
    backgroundColor: 'skyblue',
    borderRadius: 8,
    marginRight: 12,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
