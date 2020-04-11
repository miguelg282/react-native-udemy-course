import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBizResults from '../hooks/useBizResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useBizResults();

    const  filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    /*========= flex: 1 can resolve many styling issues.=========*/
    /*========= <></> wrapping components with this also fixxes many stylying issues=========*/

    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} // same as: {(newTerm) => setTerm()}
            onTermSubmit={() => searchApi(term)} 
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title='Friendly Prices'
                     
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title='A Bit Pricey'
                     
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title='Pricey' 
                    
                />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;