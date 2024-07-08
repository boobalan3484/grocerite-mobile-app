import { FlatList, Image, SafeAreaView, SafeAreaViewComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColors';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../Redux/CartSlice';


const Cart = ({route}) => {

    const dispatch = useDispatch()

    const storeData = useSelector((state) => state.cartSlice)  // cartSlice make sure naming is from store -  reducer 

    // console.log(storeData, 'Im data from store')

    const calculateTotalPrice = () => {
        return storeData.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // const handleCheckout = () => {
    //     // Add your checkout logic here
    //     console.log('Checkout clicked! Total Amount: Rs', calculateTotalPrice());
    // };


    const nav = useNavigation()


    return (
        <SafeAreaView style={styles.areaView}>
            <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>

                <Text style={styles.header}>My Cart</Text>
            </View>


            <View style={{ flex: 1 }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={storeData}
                    renderItem={({ item, index }) => (
                        <>
                            {(item.length != 0) ?

                                < View style={styles.parentBox}>

                                    <View style={{ backgroundColor: 'white', flex: .40, alignContent: 'center', justifyContent: 'center' }}>
                                        <Image
                                            style={{ height: '100%', width: '100%' }}
                                            resizeMode='contain'
                                            source={item.img } />
                                    </View>

                                    <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20, justifyContent: 'center', gap: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 22, fontWeight: '800' }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                                            <Entypo name="cross" size={28} color="black"
                                                onPress={() => {
                                                    dispatch(removeFromCart(item))
                                                }} />
                                        </View>

                                        <Text style={{ fontSize: 16, color: 'grey' }}>{item.pieces = item.pieces * item.quantity} {item.measurement}</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                                <Entypo name="minus" size={28} color="grey"
                                                    onPress={() => {
                                                        dispatch(decrementQuantity(item))
                                                    }} />
                                                <Text style={{ fontSize: 24, fontWeight: '600', color: 'black' }}>{item.quantity}</Text>
                                                <Entypo name="plus" size={28} color={myColors.primary}
                                                    onPress={() => {
                                                        item.quantity < 5 &&
                                                            dispatch(incrementQuantity(item))
                                                    }} />
                                            </View>

                                            <Text style={{ fontSize: 22, fontWeight: '700' }}> &#8377; {item.price = item.quantity * item.price}</Text>

                                        </View>
                                    </View>
                                </View>
                                :
                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
                                    <Text style={{ color: 'black' }}>
                                        Your cart is empty!
                                    </Text>
                                </View>

                            }
                        </>
                    )}

                />
            </View>

            <View >
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
                        // handleCheckout()
                        // dispatch(addToCart(productData))
                        nav.navigate('CheckoutPage')

                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 1, textAlign: 'center', color: 'white', fontSize: 18, fontWeight: '500' }}>Go to checkout</Text>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '400', backgroundColor: 'darkgreen', paddingHorizontal: 8, paddingVertical: 6 }}> &#8377; {calculateTotalPrice()} </Text>
                    </View>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default Cart

const styles = StyleSheet.create({
    areaView: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        gap: 20,
        paddingVertical: 20
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        flex: 1,
    },
    parentBox: {
        height: responsiveHeight(16),
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 2,
        flexDirection: 'row',
    }
})