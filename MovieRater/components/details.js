import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function MovieDetails({route}) {

  const { movie } = route.params

  return (
    <View>
      <Text>Details about {movie.title}</Text>
      <View style={styles.starContainer}>
        <FontAwesomeIcon style={movie.average_rating > 0 ? styles.orange : styles.black} icon={faStar} />
        <FontAwesomeIcon style={movie.average_rating > 1 ? styles.orange : styles.black} icon={faStar} />
        <FontAwesomeIcon style={movie.average_rating > 2 ? styles.orange : styles.black} icon={faStar} />
        <FontAwesomeIcon style={movie.average_rating > 3 ? styles.orange : styles.black} icon={faStar} />
        <FontAwesomeIcon style={movie.average_rating > 4 ? styles.orange : styles.black} icon={faStar} />
        <Text>({movie.number_of_ratings})</Text>
      </View>
      <Text>{movie.description}</Text>
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
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  orange: {
    color: 'orange',
  },
  black: {
    color: 'black',
  },
});
