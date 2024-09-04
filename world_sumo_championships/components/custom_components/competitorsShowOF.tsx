import React from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/components/custom_components/myStyles";
import {MyButtonGradient} from "@/components/custom_components/buttonGradient";
import CountryFlag from "react-native-country-flag";

export const CompetitorsShowOF = () =>{

    const images = {
        'test1': require('@/assets/myImages/test1.jpg'),
    };

    const data=[{id: '1', country: "gb", name: "DEEJUA VICTORIA", photo: 'test1'},
        {id: '2', country: "ee", name: "Liigend Mariette", photo: 'test1'},
        {id: '3', country: "ee", name: "Liigend Mariette", photo: 'test1'},
        {id: '4', country: "ee", name: "Liigend Mariette", photo: 'test1'},
        {id: '5', country: "ee", name: "Liigend Mariette", photo: 'test1'},
        {id: '6', country: "ee", name: "Liigend Mariette", photo: 'test1'}
    ]

    const ITEM_SIZE = 200; // Preferowana szerokość elementu (w pikselach)
    const screenWidth = Dimensions.get('window').width;
    const numColumns = Math.floor(screenWidth / ITEM_SIZE);
    const onlyOne = numColumns===1;


    const renderItem = ({item}) => {
        return(
                <View style={[styles.defaultBackground,{alignItems: 'center', justifyContent: 'center'}]}>
                    <View style={styles.defaultBackground}>
                        <View style={styles.photoBackground}>
                            <Image
                                source={images[item.photo]}
                                style={{
                                    width: ITEM_SIZE,
                                    height: ITEM_SIZE,
                                }}
                            />
                        </View>
                        <CountryFlag isoCode={item.country} size={30} style={styles.flagStyle} />
                    </View>
                    <Text style={styles.normalText}>{item.name}</Text>
                </View>
        );
    };

    return (
        <View style={[{flex: 8}, onlyOne && {alignItems: 'center'}]}>
            <FlatList
                key={numColumns}
                data={data}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text> Brak danych</Text>}
                contentContainerStyle={{paddingHorizontal: 10}}
                numColumns={numColumns}
                renderItem={renderItem}
            />
        </View>
    );
};