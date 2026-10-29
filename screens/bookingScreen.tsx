import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings 🎟️</Text>
      <Text>Cricket Tournament</Text>
      <Text>Football Championship</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BookingsScreen;