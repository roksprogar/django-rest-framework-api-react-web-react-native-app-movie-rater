import { useState } from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';

export default function Home({navigation}) {
    const [name, setName] = useState('Rok')
  return (
    <View style={styles.home}>
        <Text>I'm on iPhone!</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: Platform.OS == 'ios' ? '#0f0': '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },

});
