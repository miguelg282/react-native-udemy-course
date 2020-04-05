import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() =>console.log('onTermSubmit') } 
            />
            <Text>Hello from Search Screen</Text>
            <Text>{term}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;