import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MovieList from './components/list';
import MovieDetails from './components/details'
import MovieEdit from './components/edit';
import Auth from './components/auth';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="MovieEdit" component={MovieEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}