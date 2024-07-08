import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = (props) => {
  return (
    <Image source={require('../assets/icon.png')}
    style={props.logo}
    resizeMode='cover'
    />
  )
}

export default Logo