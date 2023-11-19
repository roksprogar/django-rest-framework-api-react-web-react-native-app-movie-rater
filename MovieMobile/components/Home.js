import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({msg}) {
    const [name, setName] = useState('Rok')
  return (
    <View style={styles.home}>
      <Text style={styles.text}>Btn</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>Btn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#0000ff',
    flex: 6,
  },
  text: {
    flex: 3,
  },
});
