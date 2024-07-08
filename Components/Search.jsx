import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {responsiveHeight} from 'react-native-responsive-dimensions';
import { MaterialIcons } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.container}>
            <MaterialIcons name="search" size={24} color="black" />
            <TextInput style={{flex:1}} placeholder='What do you want?'></TextInput>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f2f3f2',
        height:responsiveHeight(6),
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        gap:10

    }
})