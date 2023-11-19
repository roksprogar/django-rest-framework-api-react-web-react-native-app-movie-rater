import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({msg}) {
    const [name, setName] = useState('Rok')
  return (
    <View style={styles.home}>
      <Text>{msg}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#0000ff',
    marginTop: 30,
  },
});
