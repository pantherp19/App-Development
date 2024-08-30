import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

export default function AppPro(): JSX.Element {
  const colorScheme = useColorScheme();
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={isDark ? styles.whiteText : styles.darkText}>
          useColorScheme(): {colorScheme}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  whiteText: {
    color: 'white',
  },

  darkText: {
    color: 'black',
  },
});
