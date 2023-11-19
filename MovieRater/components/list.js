import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function MovieList() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://192.168.1.177:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization': 'Token 42c3f93e53684418e372619c503ace234a56685f',
      }
    })
    .then(res => res.json())
    .then(jsonRes => {
      console.log(jsonRes)
      setMovies(jsonRes)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <View>
      <Image
        source={require('../assets/MR_logo.png')}
        style={{width: '100%', height: 135, paddingTop: 30}}
      />
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText} key={item.id}>{item.title}</Text>
          </View>
        )}
      />
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
