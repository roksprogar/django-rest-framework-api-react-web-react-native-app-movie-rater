import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Auth({navigation}) {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ regView, setRegView ] = useState(false)

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
    getData()
  }, [])

  const auth = () => {
    if (regView) {
      fetch(`http://192.168.1.177:8000/api/users/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username,
          password,
      })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
          setRegView(false)
      })
      .catch(error => console.log(error))
    } else {
      fetch(`http://192.168.1.177:8000/auth/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username,
          password,
      })
      })
      .then(res => res.json())
      .then(res => {
          console.log(res)
          saveData(res.token)
          navigation.navigate("MovieList")
      })
      .catch(error => console.log(error))
    }
  }

  const saveData = async (token) => {
    await AsyncStorage.setItem('MR_Token', token);
  }

  const getData = async () => {
    token = await AsyncStorage.getItem('MR_Token');
    if (token) navigation.navigate("MovieList")
  }

  const toggleView = () => {
    setRegView(!regView)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={text => setUsername(text)}
        value={username}
        autoCapitalize='none'
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button onPress={auth} title={regView ? "Sign up" : "Log in"} />
      <TouchableOpacity onPress={toggleView}>
        {regView
        ? <Text style={styles.viewText}>Already have an account? Log in here.</Text>
        : <Text style={styles.viewText}>Don't have an account? Sign up here.</Text> }
      </TouchableOpacity>
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
  viewText: {
    color: 'white',
    fontSize: 20,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
