import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home({msg}) {
    const [name, setName] = useState('Rok')
  return (
    <View style={styles.home}>
      <Text style={styles.name}>{name}</Text>
      <TextInput
        style={{height: 40, width: 100, backgroundColor: 'red'}}
        value={name}
        placeholder='type in your name'
        onChangeText={(text) => setName(text)}
      />
      <Button
        onPress={() => alert(`${name} clicked the button!`)}
        title="Click me!"
      />
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
    marginBottom: 30,
  },
});
