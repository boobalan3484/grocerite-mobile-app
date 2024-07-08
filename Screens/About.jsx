import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColors';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Logo from '../Components/Logo';
import { responsiveHeight } from 'react-native-responsive-dimensions';


const CheckoutPage = () => {

    const nav = useNavigation()

    // useEffect(() => {
    //     setTimeout(() => {
    //         nav.replace('Cart');
    //     }, 3000);
    //     setTimeout(() => {
    //         nav.navigate('Home');
    //     }, 2000)
    // }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, gap: 40 }}>
            <StatusBar backgroundColor='white' />

            <View>

                <Logo logo={{ height: 70, width: 150 }} />

                <View style={{ gap: 10 }}>

                    <View style={styles.mailView}>
                        <MaterialIcons name="location-pin" size={24} color="black" />
                        <Text style={styles.text}> No. 8/54, near BSNL office , Sankagiri, Salem - 637301.</Text>
                    </View>

                    <View style={styles.mailView}>
                        <MaterialIcons name="phone-android" size={24} color="black" />
                        <Text style={styles.text}> +91 8248951643 </Text>
                    </View>

                    <View style={styles.mailView}>
                        <MaterialIcons name="email" size={24} color="black" />
                        <Text style={styles.text}> ogani@gmail.com </Text>
                    </View>
                </View>

            </View>

            <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}> Join our Newsletter Now</Text>
                <Text style={styles.text}> Get e-mail updates about our latest shop and special offers.</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>

                    <View style={styles.search}>
                        <MaterialIcons name="search" size={24} color="black" />
                        <TextInput style={{ flex: 1 }} placeholder='Enter your email'></TextInput>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ backgroundColor: myColors.primary, padding: 10, flex: .24 }}
                    >
                        <Text style={{ color: 'white', fontWeight: '500', fontSize: 14 }}> Subscribe </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default CheckoutPage

const styles = StyleSheet.create({
    text: {
        fontSize: 16
    },
    search: {
        backgroundColor: '#f2f3f2',
        height: responsiveHeight(5),
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 10,
        flex: 1
    },
    mailView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})