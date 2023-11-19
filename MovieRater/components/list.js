import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MovieList({navigation}) {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    navigation.setOptions({
      title: "Movies",
      headerStyle: {
        backgroundColor: 'orange',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
      },
      headerRight: () => (
        <Button
          title="New"
          color="white"
          onPress={() => navigation.navigate("MovieEdit", {movie: { title: '', description: ''}})}
        />
      ),
    })

    getData()
  }, [])

  const movieClicked = (movie) => {
    navigation.navigate("MovieDetails", {movie: movie})
  }

  const getData = async () => {
    token = await AsyncStorage.getItem('MR_Token');
    if (!token) navigation.navigate("Auth")

    fetch('http://192.168.1.177:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
      }
    })
    .then(res => res.json())
    .then(jsonRes => {
      setMovies(jsonRes)
    })
    .catch(error => console.log(error))
  }

  return (
    <View>
      <Image
        source={require('../assets/MR_logo.png')}
        style={{width: '100%', height: 135, paddingTop: 30}}
      />
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => movieClicked(item)}
          >
            <View style={styles.item}>
              <Text style={styles.itemText} key={item.id}>{item.title}</Text>
            </View>
          </TouchableOpacity>
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
