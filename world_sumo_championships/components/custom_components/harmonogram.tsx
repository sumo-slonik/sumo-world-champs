import React from 'react';
import {FlatList, Text, View} from "react-native";


export const myHarmonogram = () =>{
    const data = [];

    const renderItem = (item) => (
        <View style={{backgroundColor: '#f9c2ff', padding: 20, marginVertical: 8, marginHorizontal: 16,}}>
            <Text>{item.key}</Text>
        </View>
    );

    return (
        <View>
            <FlatList>
                data={data}
                renderItem={renderItem}

            </FlatList>
        </View>
    );
};