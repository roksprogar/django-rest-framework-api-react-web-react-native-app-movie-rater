import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function MovieEdit({route, navigation}) {

  const { movie } = route.params

  const [ title, setTitle ] = useState(movie.title)
  const [ description, setDescription ] = useState(movie.description)

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
  })

  const saveMovie = () => {
    navigation.goBack()
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
        onChangeText={text => setDescription}
        value={description}
      />
      <Button onPress={saveMovie} title="Save" />
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
