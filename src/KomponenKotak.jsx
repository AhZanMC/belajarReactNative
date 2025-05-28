import React from "react";
import { StyleSheet, View } from "react-native"
import { Text } from "react-native";
export default function KomponenKotak() {
  return (
    <View style={styles.container}>
      <View style={styles.kotak}></View>
      <Text>Belajar React Native - AhZanMC</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    kotak: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 10,
    }
});