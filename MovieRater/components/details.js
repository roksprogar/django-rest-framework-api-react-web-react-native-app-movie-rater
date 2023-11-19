import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function MovieDetails() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  item: {
    flex: 1,
    padding: 10,
    heaight: 50,
    backgroundColor: '#282C35',
  },
  itemText: {
     color: '#fff',
     fontSize: 24,
  },
});
