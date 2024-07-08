import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const Table = () => {

    const TableData = [
        {
            title: 'Availability',
            status: 'In Stock'
        },
        {
            title: 'Shipping',
            status: '1 day shipping. Free pickup'
        },
        {
            title: 'Weight',
            status: '1kg'
        }
    ]

    return (
        <View style={styles.container}>

            {TableData.map((item, index) => {
                return (
                    <View key={index}  style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '600' }}> {item.title} </Text>
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 16 }}> {item.status}</Text>
                        </View>
                    </View>
                )

            })
            }

        </View>
    );
}

export default Table

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    }
});
