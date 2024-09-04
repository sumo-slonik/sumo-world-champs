import {Text, View, ScrollView} from "react-native";
import * as React from "react";
import {gradientColors, styles} from "@/components/custom_components/myStyles";
import {rules} from "@/assets/data/eventData";
import {LinearGradient} from "expo-linear-gradient";

export const SumoInfoScreen =() => {
    return (

        <ScrollView>
            <LinearGradient
                colors={gradientColors}
                style={{flex: 1}}
            >
                <View style={[styles.defaultBackground, {alignItems: 'center', padding: 10}]}>
                    <Text style={[styles.menuNameStyle, {padding: 10}]}>FS Regulations on Refereeing</Text>
                    <Text style={[styles.normalText, {padding: 20, textAlign: 'justify'}]}> {rules} </Text>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};