import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <Text key={item.id}>{item.title}</Text>
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
});
