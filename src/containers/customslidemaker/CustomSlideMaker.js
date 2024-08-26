import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomSliderMarker = ({ currentValue, position }) => {
  return (
    <View style={[styles.marker,{ left: position - 20 }]}>
      <Text style={styles.markerText}>{currentValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    position: 'absolute',
    backgroundColor: 'blue', // Customize the background color of the marker
    padding: 5,
    borderRadius: 5,
  },
  markerText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CustomSliderMarker;
