import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, Button, FlatList } from 'react-native';


const HistoryScreen = ({ route }) => {
  const { books } = route.params;

  const lastThreeBooks = books.slice(Math.max(books.length - 3, 0));

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Last Three Books Read:</Text>
      <FlatList
        data={lastThreeBooks}
        renderItem={({ item }) => (
          <View>
            <Text>Title: {item.title}</Text>
            <Text>Author: {item.author}</Text>
            <Text>Genre: {item.genre}</Text>
            <Text>Number of Pages: {item.numPages}</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', marginBottom: 10 }} />
          </View>
        )}
        keyExtractor={(item, index) => `${item.title}-${index}`}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

