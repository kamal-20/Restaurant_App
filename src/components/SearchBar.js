import React from  'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({search,onSearchChange, onSearchSubmit}) => {
    return(
        <View style={styles.background}>
            <Feather name = "search" style ={styles.iconStyle} />
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search" 
            style={styles.inputStyle}
            value={search}
            onChangeText = {newSearch => onSearchChange(newSearch)}
            onEndEditing ={onSearchSubmit}
             />  
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(220, 220, 220, 1)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        color: 'black',
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf : 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;