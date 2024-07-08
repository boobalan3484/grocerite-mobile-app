import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Dropdown } from '../Utils/Data'; 
import { FontAwesome } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColors';

const DropBox = ({ description, nutrition, rating, more }) => {


    const [getIndex, setGetIndex] = useState();
    const [toggle, setToggle] = useState(false)

    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                data={Dropdown}
                renderItem={({ item, index }) => (
                    <View style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1, marginBottom: 20, paddingBottom: 15 }}>
                        <TouchableOpacity
                            onPress={() => {
                                setGetIndex(index);
                                setToggle(!toggle);
                            }}
                        >
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', }}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.title}</Text>
                                <Feather name={getIndex == index && toggle ? "chevron-down" : "chevron-right"} size={28} color="black" />
                            </View>
                        </TouchableOpacity>

                        {getIndex == index && toggle ?
                            <Text style={{ fontSize: 18, textAlign: 'justify', paddingHorizontal: 10, paddingVertical: 10, color: 'grey' }}>{item.description}</Text> : null}
                    </View>
                )}
            />

        </View >
    )
}

export default DropBox

const styles = StyleSheet.create({})