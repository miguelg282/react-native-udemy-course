import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBizResults from '../hooks/useBizResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, bizResults, errorMessage] = useBizResults();
    
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} // same as: {(newTerm) => setTerm()}
            onTermSubmit={() => searchApi(term)} 
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {bizResults.length} results</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;