import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import DropBox from '../Components/DropBox';
import { myColors } from '../Utils/MyColors';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';

const Details = ({ route }) => {

    const dispatch = useDispatch()

    const productData = route.params.main

    const { name, price, pieces, measurement, img } = productData

    const storeData = useSelector((state) => state.cartSlice)  // cartSlice make sure naming is from store -  reducer 

    const nav = useNavigation()

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar backgroundColor='white' />

            <View style={{ position: 'relative' }}>
                <Image
                    style={{ height: 300, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
                    source={img}
                    resizeMode='contain'
                />
                <View style={styles.nav}>
                    <TouchableOpacity >
                        <Ionicons onPress={() => { nav.goBack() }} name="chevron-back-outline" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Feather name="share" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ paddingHorizontal: 15, paddingTop: 20, gap: 10, backgroundColor: 'white', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color: 'black' }}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
                    <TouchableOpacity >
                        <MaterialIcons name="favorite-border" size={30} color="black"/>
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 15, color: 'grey' }}>
                    {pieces} {measurement}
                </Text>

                <Text style={{ fontSize: 24, color: 'black', fontWeight: '500', borderBottomColor: '#e3e3e3', borderBottomWidth: 1, paddingBottom: 10 }}>
                    &#8377; {price}
                </Text>

                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <DropBox />
                </View>

                <View style={{ paddingVertical: 30 }}>

                    {storeData.some((value) => value.name == productData.name) ?
                        <TouchableOpacity
                            disabled={true}
                            style={{
                                backgroundColor: '#BCCDBE',
                                borderRadius: 10,
                                paddingVertical: 14,
                                paddingHorizontal: 10,
                                alignItems: 'center',
                            }}
                            activeOpacity={1}
                            onPress={() => {
                                // dispatch(addToCart(productData))
                                // nav.navigate('Cart')
                            }
                            }
                        >
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Added to Cart</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={{
                                backgroundColor: myColors.primary,
                                borderRadius: 10,
                                paddingVertical: 14,
                                paddingHorizontal: 10,
                                alignItems: 'center',
                            }}
                            activeOpacity={0.75}
                            onPress={() => {
                                dispatch(addToCart(productData))
                                nav.navigate('CartStack')
                            }
                            }
                        >
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Add to Cart</Text>
                        </TouchableOpacity>

                    }


                </View>
            </View>
        </SafeAreaView >
    )
}

export default Details

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 30
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        width: '100%'
    }
})