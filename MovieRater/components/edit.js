import { StyleSheet, Text, View } from 'react-native';

export default function MovieEdit({route, navigation}) {

  const { movie } = route.params

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

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Edit movie: {movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 10,
  },
  description: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
});
