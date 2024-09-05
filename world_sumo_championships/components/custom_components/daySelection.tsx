import React from 'react';
import { FlatList, Text, TouchableOpacity, View,  StyleSheet} from "react-native";
import {styles} from "@/components/custom_components/myStyles";
import {MyButtonGradient} from "@/components/custom_components/buttonGradient";

export const DayChoosingComponent = ({data, onItemPress, selectedData})=> {

    const renderItem = ({item}) => {
        const isSelected = item === selectedData
      return(
          <TouchableOpacity
            onPress={() =>onItemPress(item)}
          >

              <View style ={[styles.harmonogramStyle, isSelected && styles.chosenHarmonogramStyle, {backgroundColor: "white", position: 'relative'}]}>
                  <MyButtonGradient isSelected={isSelected}/>
                  <Text style={[styles.harmonogramText, isSelected && styles.chosenHarmonogramText]}> {item}</Text>
              </View>
          </TouchableOpacity>
        );
    };

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                ListEmptyComponent={<Text> Brak danych</Text>}
                contentContainerStyle={{paddingVertical: 0}}
                horizontal={true}
            />
        </View>
        );



}