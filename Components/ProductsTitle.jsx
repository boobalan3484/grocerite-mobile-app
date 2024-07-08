import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColors } from '../Utils/MyColors'

const ProductsTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, fontWeight:'600'}}> {props.title} </Text>
      <Text style={{fontSize:16, color:myColors.primary}}>See all</Text>
    </View>
  )
}

export default ProductsTitle

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', justifyContent:'space-between', alignItems:'center'
    }
})