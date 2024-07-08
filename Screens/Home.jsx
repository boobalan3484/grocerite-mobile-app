import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../Components/Logo'
import { StatusBar } from 'expo-status-bar'
import Search from '../Components/Search'
import HomeBanner from '../Components/HomeBanner'
import ProductsTitle from '../Components/ProductsTitle'
import ProductsCarousel from '../Components/ProductsCarousel'
import { caurosalImages, fruits, vegetables, products1, products2 } from '../Utils/Data'

export default function Home() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar backgroundColor='white' />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, paddingHorizontal: 20, paddingTop: 10 }}>

                <View style={{ gap: 20, paddingVertical: 50 }}>

                    <Logo logo={{ height: 36, width: 100 }} />

                    <Search />

                    <HomeBanner />

                    <ProductsTitle title="Exclusive Offer" />
                    <ProductsCarousel data={vegetables} />

                    <ProductsTitle title="Top Rated" />
                    <ProductsCarousel data={products1} />

                    <ProductsTitle title="Best Selling" />
                    <ProductsCarousel data={fruits} />

                    <ProductsTitle title="Highly Searched" />
                    <ProductsCarousel data={products2} />

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    }
})