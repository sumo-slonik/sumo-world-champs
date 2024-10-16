import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/components/custom_components/myStyles";
import {MyButtonGradient} from "@/components/custom_components/buttonGradient";


export const MyHarmonogram = ({key, data, selectedId, setSelectedId}) =>{


    const renderItem = ({item}) => {
        const isSelected = item.id ===selectedId;
        return(
            <TouchableOpacity
                onPress={() =>setSelectedId(item.id)}
            >
                <View style={[styles.harmonogramStyle, isSelected && styles.chosenHarmonogramStyle, {position: 'relative', flex: 1}]}>
                    <MyButtonGradient  isSelected={isSelected}/>
                    <Text style={[styles.harmonogramText, isSelected && styles.chosenHarmonogramText]}>{item.eventName}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text> Brak danych</Text>}
                contentContainerStyle={{paddingVertical: 0}}
            />
        </View>
    );
};