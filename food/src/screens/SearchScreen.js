import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [bizResults, setBizResults] = useState([]);

    const searchApi = async () => {
      const response = await yelp.get('/search', {
          params: {
              limit: 50,
              term,
              location: 'Long Beach'
          }
      });
      setBizResults(response.data.businesses);
        
    }

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} // same as: {(newTerm) => setTerm()}
            onTermSubmit={searchApi} // same as: {() => searchApi()}
            />
            <Text>Hello from Search Screen</Text>
            <Text>We have found {bizResults.length} results</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;