import React from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/components/custom_components/myStyles";
import {MyButtonGradient} from "@/components/custom_components/buttonGradient";
import CountryFlag from "react-native-country-flag";
import {w80upS} from "@/assets/data/eventData";

export const CompetitorsShowOF = ({key, data}) =>{


    const ITEM_SIZE = 200;
    const screenWidth = Dimensions.get('window').width;
    const numColumns = Math.floor(screenWidth / ITEM_SIZE);
    const onlyOne = numColumns===1;


    const renderItem = ({item}) => {
        return(
                <View style={[styles.defaultBackground,{alignItems: 'center', justifyContent: 'center'}]}>
                    <View style={styles.defaultBackground}>
                        <View style={styles.photoBackground}>
                            <Image
                                source={item.photo}
                                style={{
                                    width: ITEM_SIZE,
                                    height: ITEM_SIZE+50,
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
                ListEmptyComponent={<Text style={styles.chapterText}> Choose weight category</Text>}
                contentContainerStyle={{paddingHorizontal: 10}}
                numColumns={numColumns}
                renderItem={renderItem}
            />
        </View>
    );
};