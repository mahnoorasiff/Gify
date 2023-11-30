import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
  Text,
} from 'react-native';
import axios from 'axios';
import Gif from '../components/Gif';


const GifList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifData, setGifData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const API_KEY = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk';

  const TRENDING_API = 'https://api.giphy.com/v1/gifs/trending';
  const SEARCH_API = 'https://api.giphy.com/v1/gifs/search';

  const fetchData = async () => {
    const URL = searchQuery?.length ? SEARCH_API : TRENDING_API;

    try {
      const response = await axios.get(URL, {
        params: {
          api_key: API_KEY,
          q: searchQuery,
          limit: 15,
          offset: offset,
        },
      });

      setGifData((prevData):any => [...prevData, ...response.data.data]);
      setOffset(offset + 15);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    setGifData([]);
    setOffset(0);
    fetchData();
  };

  const handleLoadMore = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <SafeAreaView style={{flex: 1, marginTop: 25}}>
      {refreshing ? <ActivityIndicator /> : null}
      <TextInput
        style={styles.searchbox}
        placeholder="Search GIFs"
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />

      <FlatList
        data={gifData}
        keyExtractor={item  => item.id}
        renderItem={({item}) => <Gif data={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
        }
      />
    </SafeAreaView>
  );
};

export default GifList;
const styles = StyleSheet.create({
  searchbox: {
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    padding: 10,
  },
});
