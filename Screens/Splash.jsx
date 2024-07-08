import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from '../Utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Logo from '../Components/Logo'

const Splash = () => {

    const nav = useNavigation()

    useEffect(() => {

        setTimeout(() => {
            nav.replace('Home')
        }, 2000);
    }, [])
    return (
        <View style={styles.mainContainer}>
            <StatusBar style='light' />
            <Logo logo={{tintColor:'white'}}/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: myColors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})