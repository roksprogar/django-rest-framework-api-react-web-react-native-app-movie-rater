import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function MovieEdit({route, navigation}) {

  const { movie } = route.params
  const [ title, setTitle ] = useState(movie.title)
  const [ description, setDescription ] = useState(movie.description)

  useEffect(() => {
    navigation.setOptions({
      title: movie.title,
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
          title="Delete"
          color="white"
          onPress={deleteMovie}
        />
      ),
    })
  }, [])

  const deleteMovie = () => {
    if (movie.id) {
      fetch(`http://192.168.1.177:8000/api/movies/${movie.id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 42c3f93e53684418e372619c503ace234a56685f',
        }
      })
      .then(res => {
        navigation.navigate("MovieList")
      })
      .catch(error => console.log(error))
    }
  }

  const saveMovie = () => {
    if (movie.id) {
      fetch(`http://192.168.1.177:8000/api/movies/${movie.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 42c3f93e53684418e372619c503ace234a56685f',
        },
        body: JSON.stringify({
          title,
          description,
        })
      })
      .then(res => res.json())
      .then(movie => {
        navigation.navigate("MovieDetails", {movie: movie})
      })
      .catch(error => console.log(error))
    } else {
      fetch(`http://192.168.1.177:8000/api/movies/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 42c3f93e53684418e372619c503ace234a56685f',
        },
        body: JSON.stringify({
          title,
          description,
        })
      })
      .then(res => res.json())
      .then(res => {
        navigation.navigate("MovieList")
      })
      .catch(error => console.log(error))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder='Title'
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder='Title'
        onChangeText={text => setDescription(text)}
        value={description}
      />
      <Button onPress={saveMovie} title={movie.id ? "Save" : "Add"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 10,
  },
  label: {
    fontSize: 24,
    color: 'white',
    padding: 10,
  },
  input: {
    fontSize: 24,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
  },
});
