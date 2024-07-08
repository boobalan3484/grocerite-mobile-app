import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColors';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const CheckoutPage = () => {

  const nav = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      nav.replace('Cart');
    }, 3000);
    setTimeout(() => {
      nav.navigate('Home');
    }, 2000)
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap:20 }}>
      <StatusBar backgroundColor='white' />
      <MaterialIcons name="verified" size={70} color={myColors.primary} />
      <Text style={{ textAlign: 'center', fontSize:20 }}> {`Congrats!! Your Order Placed Successfully!! `} </Text>
    </View>
  )
}

export default CheckoutPage

const styles = StyleSheet.create({})