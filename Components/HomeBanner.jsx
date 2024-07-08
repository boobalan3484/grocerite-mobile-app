import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const HomeBanner = () => {
  return (
    <View>
     <Image source = {require('../assets/Logo/banner.png')} style={{height:responsiveHeight(20), width:'100%', borderRadius:10}}/>
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({})