import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Three</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'orange',
  },

  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 6,
    margin: 8,
  },

  cardText: {
    // backgroundColor: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardOne: {
    backgroundColor: '#ef5354',
  },

  cardTwo: {
    backgroundColor: '#50dbb4',
  },

  cardThree: {
    backgroundColor: '#5da3fa',
  },
});
