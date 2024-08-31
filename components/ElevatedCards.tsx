import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated, styles.cardBlue]}>
          <Text style={styles.cardText}>One</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.cardGreen]}>
          <Text style={styles.cardText}>Two</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
          <Text style={styles.cardText}>Three</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.cardBlue]}>
          <Text style={styles.cardText}>Four</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.cardGreen]}>
          <Text style={styles.cardText}>Five</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
          <Text style={styles.cardText}>Six</Text>
        </View>
      </ScrollView>
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
    // flex: 1,
    marginLeft: 4,
  },

  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 110,
    margin: 8,
    borderRadius: 6,
  },

  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardElevated: {
    elevation: 4,
    shadowOffset: {
      width: 7,
      height: 14,
    },
    shadowColor: '#ef5354',
    shadowOpacity: 1,
    shadowRadius: 6,
  },

  cardRed: {
    backgroundColor: '#ef5354',
  },

  cardGreen: {
    backgroundColor: '#50dbb4',
  },

  cardBlue: {
    backgroundColor: '#5da3fa',
  },
});
