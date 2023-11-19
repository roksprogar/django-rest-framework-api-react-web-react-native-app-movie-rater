import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Auth({navigation}) {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  useEffect(() => {
    navigation.setOptions({
      title: "Log in",
      headerStyle: {
        backgroundColor: 'orange',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
      },
    })
  }, [])

  const auth = () => {
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
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button onPress={auth} title="Log in" />
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
