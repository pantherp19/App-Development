import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TrendingPlaces() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/14455613/pexels-photo-14455613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.imageCard}
          />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>
              Architectural beauty - Napier Museum
            </Text>
            <Text style={styles.cardLabel}>Thiruvananthapuram, KL, India</Text>
            <Text style={styles.cardDescription}>
              Built in 1855 and designed by Robert Fellows Chisholm, it
              showcases a unique blend of Indian, Chinese, Kerala, and Mughal
              architectural styles.
            </Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
          </View>
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
    margin: 8,
  },

  card: {
    width: 390,
    margin: 0,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#2A2C2C',
    padding: 10,
    // overflow: 'hidden',
  },

  imageCard: {
    height: 200,
    width: 'auto',
    margin: 6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  cardDetails: {
    flex: 1,
    flexGrow: 1,
    padding: 8,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 12,
    marginBottom: 6,
    color: '#7B8788',
  },

  cardFooter: {
    color: '#5da3fa',
  },
});
