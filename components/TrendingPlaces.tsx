import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TrendingPlaces() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/14455613/pexels-photo-14455613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.imageCard}
          />
          <View>
            <Text style={styles.cardTitle}>
              Architectural beauty - Napier Museum
            </Text>
            <Text style={styles.cardLabel}>Thiruvananthapuram, KL, India</Text>
            <Text style={styles.cardDescription}>
              Built in 1855 and designed by Robert Fellows Chisholm, it
              showcases a unique blend of Indian, Chinese, Kerala, and Mughal
              architectural styles.
            </Text>
            <Text style={styles.cardFooter}>12 mins away from you</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/15928901/pexels-photo-15928901/free-photo-of-ruin-of-an-ancient-building-with-bass-reliefs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.imageCard}
          />
          <View>
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

  box: {
    width: 335,
    margin: 8,
  },

  imageCard: {
    height: 200,
    width: 'auto',
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  cardLabel: {},

  cardDescription: {},

  cardFooter: {},
});
