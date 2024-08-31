import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import TrendingPlaces from './components/TrendingPlaces';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <TrendingPlaces />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },

  container: {
    backgroundColor: '#ef5354',
  },
});
