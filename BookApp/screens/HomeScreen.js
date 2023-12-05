import React from 'react';
import { View, Text } from 'react-native';

const genres = ['Fantasy', 'Mystery', 'Science Fiction', 'Romance', 'Non-fiction']; 

const App = () => {
  const [books, setBooks] = useState([]); 
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [numPages, setNumPages] = useState('');

  const addBook = () => {
    if (title && author && genre && numPages) {
      const newBook = {
        title,
        author,
        genre,
        numPages: parseInt(numPages),
      };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
      setGenre('');
      setNumPages('');
    } 
  };

  const lastReadBook = books.length > 0 ? books[books.length - 1] : null; 

  const totalPagesRead = books.reduce((total, book) => total + book.numPages, 0); 

  const averagePages = books.length > 0 ? totalPagesRead / books.length : 0;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Last Read Book:</Text>
      {lastReadBook && (
        <View>
          <Text>Title: {lastReadBook.title}</Text>
          <Text>Author: {lastReadBook.author}</Text>
          <Text>Genre: {lastReadBook.genre}</Text>
          <Text>Number of Pages: {lastReadBook.numPages}</Text>
        </View>
      )}
      <Text>Total Pages Read: {totalPagesRead}</Text>
      <Text>Average Pages: {averagePages}</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />
      <FlatList
        data={genres}
        renderItem={({ item }) => (
          <Button title={item} onPress={() => setGenre(item)} />
        )}
        keyExtractor={(item) => item}
        horizontal
      />
      <TextInput
        placeholder="Number of Pages"
        value={numPages}
        onChangeText={setNumPages}
      />
      <Button title="Add Book" onPress={addBook} />
    </View>
  );
};

export default App;

//Reference list
//(2019). 2 December. Available at: https://youtu.be/iMCM1NceGJY (Accessed: 05 December 2023). 