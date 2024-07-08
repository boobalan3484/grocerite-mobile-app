import { FontAwesome } from '@expo/vector-icons';

import React from 'react'
import { Text, View } from 'react-native';

const Rating = ({ value }) => {
    return (
        <View style={{padding:10}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {Array.from({ length: 5 }, (_, index) => (
                    <FontAwesome key={index} name="star" size={24} color="gold" />))}
            </View>
        </View>
    )
}

/*
Array.from: 
  This method creates a new, shallow-copied array instance from an array-like or iterable object. In this case, we're creating an array with a length of 5.

{ length: 5 }: 
  The first argument passed to Array.from is an object with a length property set to 5. This defines the length of the array that will be created.

(_, index) => (...): 
  The second argument of Array.from is a mapping function that is called for each element of the new array. 
  The first parameter is the current element, and the second parameter is the index of the current element. 
  In this case, we're using an underscore (_) as a convention to indicate that we're not using the value of the current element.
*/

export default Rating
