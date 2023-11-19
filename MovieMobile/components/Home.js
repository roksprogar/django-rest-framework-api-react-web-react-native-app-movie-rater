import { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Home({msg}) {
    const [name, setName] = useState('Rok')
  return (
    <View style={styles.home}>
        <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('../assets/adaptive-icon.png')}>
        <FlatList
            data={[
                {key: 'Roks0'},
                {key: 'Roks1'},
                {key: 'Roks2'},
                {key: 'Roks3'},
                {key: 'Roks4'},
                {key: 'Roks5'},
                {key: 'Roks6'},
                {key: 'Roks7'},
                {key: 'Roks8'},
                {key: 'Roks9'},
            ]}
            renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
        />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 40,
  },

});
