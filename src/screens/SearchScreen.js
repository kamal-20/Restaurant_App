import react from "react";
import React, {useState , useEffect} from  'react';
import {View,StyleSheet,Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [search, setSearch] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return(
        <>
            <SearchBar 
            search={search} 
            onSearchChange={newSearch => setSearch(newSearch) } 
            onSearchSubmit ={() =>searchApi(search)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null} 
            <ScrollView>
                <ResultList 
                    results={filterResultByPrice('$')} 
                    title="Cost Effective"
                />
                <ResultList 
                    results={filterResultByPrice('$$')} 
                    title="Bit Pricier"
                />
                <ResultList 
                    results={filterResultByPrice('$$$')} 
                    title="Big Spendor"
                />
            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;