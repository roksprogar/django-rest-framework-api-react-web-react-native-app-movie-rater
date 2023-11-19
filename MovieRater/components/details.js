import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function MovieDetails({route, navigation}) {

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
    headerRight: () => (
      <Button
        title="Edit"
        color="white"
        onPress={() => navigation.navigate("MovieEdit", {movie: movie})}
      />
    ),
  })

  const [highlight, setHighlight] = useState(0)

  const rateClicked = () => {
    if (highlight > 0 && highlight < 6) {
      fetch(`http://192.168.1.177:8000/api/movies/${movie.id}/rate_movie/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 42c3f93e53684418e372619c503ace234a56685f',
        },
        body: JSON.stringify({
          stars: highlight
        })
      })
      .then(res => res.json())
      .then(res => {
        setHighlight(0)
        Alert.alert("Rating", res.message)
      })
      .catch(error => Alert.alert("Error", error))
    }    
  }

  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
        <FontAwesomeIcon style={movie.average_rating > 0 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.average_rating > 1 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.average_rating > 2 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.average_rating > 3 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.average_rating > 4 ? styles.orange : styles.white} icon={faStar} />
        <Text style={styles.white}>({movie.number_of_ratings})</Text>
      </View>
      <Text style={styles.description}>{movie.description}</Text>
      <View style={{borderBottomColor: "white", borderBottomWidth: 2,}}></View>
      <Text style={styles.description}>Rate it!</Text>
      <View style={styles.starContainer}>
        <Pressable onPress={() => setHighlight(1)}>
          <FontAwesomeIcon style={highlight > 0 ? styles.purple : styles.grey} icon={faStar} size={48} />
        </Pressable>
        <Pressable onPress={() => setHighlight(2)}>
          <FontAwesomeIcon style={highlight > 1 ? styles.purple : styles.grey} icon={faStar} size={48} />
        </Pressable>
        <Pressable onPress={() => setHighlight(3)}>
          <FontAwesomeIcon style={highlight > 2 ? styles.purple : styles.grey} icon={faStar} size={48} />
        </Pressable>
        <Pressable onPress={() => setHighlight(4)}>
          <FontAwesomeIcon style={highlight > 3 ? styles.purple : styles.grey} icon={faStar} size={48} />
        </Pressable>
        <Pressable onPress={() => setHighlight(5)}>
          <FontAwesomeIcon style={highlight > 4 ? styles.purple : styles.grey} icon={faStar} size={48} />
        </Pressable>
      </View>
      <Button title="Rate" onPress={rateClicked}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 10,
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
  description: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  orange: {
    color: 'orange',
  },
  white: {
    color: 'white',
  },
  purple: {
    color: 'purple',
  },
  grey: {
    color: 'grey',
  },
});
