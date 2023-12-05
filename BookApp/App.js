import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GenresScreen from './screens/GenresScreen';
import HistoryScreen from './screens/HistoryScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Genre" component={GenresScreen} />
        <Stack.Screen name="BookDetail" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );}



export default App;
