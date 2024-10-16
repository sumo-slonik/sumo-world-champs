import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/components/custom_components/myStyles";
import {MyButtonGradient} from "@/components/custom_components/buttonGradient";


export const LanguageSelection = ({data, onItemPress, selectedData}) =>{


    const renderItem = ({item}) => {
        const isSelected = item ===selectedData;
        return(
            <TouchableOpacity
                onPress={() =>onItemPress(item)}
            >
                <View style={[styles.harmonogramStyle, isSelected && styles.chosenHarmonogramStyle]}>
                    <MyButtonGradient key={isSelected ? "selected" : "deselected"} isSelected={isSelected}/>
                    <Text style={[styles.harmonogramText, isSelected && styles.chosenHarmonogramText]}>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{justifyContent: 'center', alignItems: 'center',}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                ListEmptyComponent={<Text> Brak danych</Text>}
                contentContainerStyle={{paddingVertical: 10}}
                horizontal={true}
            />
        </View>
    );
};