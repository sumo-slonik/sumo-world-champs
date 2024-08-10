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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text> Brak danych</Text>}
                contentContainerStyle={{paddingVertical: 20}}
            />
        </View>
    );
};