import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fruits, vegetables } from '../Utils/Data.js'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { FontAwesome } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColors.js';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/CartSlice.js';


const ProductsCarousel = ({ data }) => {

    const dispatch = useDispatch()

    const storeData = useSelector((state) => state.cartSlice)  // cartSlice make sure naming is from store -  reducer 

    // console.log(storeData);

    const nav = useNavigation({ data })

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => {
                            nav.navigate('Details', {
                                main: item
                            });
                        }}
                        style={styles.card}
                    >
                        <Image source={item.img}
                            style={styles.image}
                        />
                        <View style={{ paddingHorizontal: 15, gap: 3 }}>
                            <Text style={{ fontSize: 18, fontWeight: '600' }}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </Text>
                            <Text style={{ color: 'grey' }}>
                                {item.pieces}{item.measurement}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: '500' }}>
                                    &#8377; {item.price}
                                </Text>
                                {storeData.some((value) => value.name == item.name) ?
                                    <FontAwesome
                                        name="minus-square"
                                        size={33}
                                        color={myColors.primary}
                                        onPress={() => {
                                            dispatch(removeFromCart(item))
                                        }}
                                    /> :
                                    <FontAwesome
                                        name="plus-square"
                                        size={33}
                                        color={myColors.primary}
                                        onPress={() => {
                                            dispatch(addToCart(item))
                                        }}
                                    />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProductsCarousel

const styles = StyleSheet.create({
    card: {
        height: responsiveHeight(30),
        width: responsiveWidth(50),
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#f2f3f2',
        borderRadius: 15,
    },
    image: {
        height: 125,
        width: 125,
        alignSelf: 'center',
        resizeMode: "contain",
    }
})