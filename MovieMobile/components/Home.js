import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({msg}) {
    const [name, setName] = useState('Rok')
  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
