import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';


const GenresScreen = ({ route }) => {
  const { books } = route.params;
  const genreStats = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Books Read per Genre:</Text>
      <FlatList
        data={Object.keys(genreStats)}
        renderItem={({ item }) => (
          <View>
            <Text>{item}: {genreStats[item]}</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', marginBottom: 10 }} />
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Genres" component={GenresScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
