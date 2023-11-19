import { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function Home({msg}) {
    const [name, setName] = useState('Rok')
  return (
    <View style={styles.home}>
        <Text>I'm on iPhone!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: Platform.OS == 'ios' ? '#fff': '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },

});
