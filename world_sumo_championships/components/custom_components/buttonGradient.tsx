import React from 'react';
import { FlatList, Text, TouchableOpacity, View,  StyleSheet} from "react-native";
import {styles} from "@/components/custom_components/myStyles";
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';



export const MyButtonGradient =({isSelected}) => {

    return (
        <View style={StyleSheet.absoluteFillObject}>
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
            <Defs>
                <RadialGradient
                    id={"grad"}
                    cx={"50%"}
                    cy={"50%"}
                    rx={"100%"}
                    ry={"100%"}
                    fx={"50%"}
                    fy={"50%"}
                    gradientUnits={"objectBoundingBox"}
                >
                    <Stop offset={"0%"} stopColor={isSelected ? "#2C130E" : "#931807"} stopOpacity="1"/>
                    <Stop offset={"100%"} stopColor={isSelected ? "#6e3023" : "#f11d06"} stopOpacity="1"/>
                </RadialGradient>
            </Defs>
            <Rect x="0" y="0" width={"100%"} height={"100%"} fill={"url(#grad)"}/>
        </Svg>
        </View>
    )
}