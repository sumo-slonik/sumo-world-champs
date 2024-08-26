import {Text, View, ScrollView} from "react-native";
import * as React from "react";
import {styles} from "@/components/custom_components/myStyles";
import {rules} from "@/assets/data/eventData";
import {LinearGradient} from "expo-linear-gradient";

export const SumoInfoScreen =() => {
    return (

        <ScrollView>
            <LinearGradient
                colors={["#B87F70","#E1AD9C"]}
                style={{flex: 1}}
            >
                <View style={[styles.defaultBackground, {alignItems: 'center', padding: 10}]}>
                    <Text style={[styles.menuNameStyle, {padding: 10}]}>Rules of competition</Text>
                    <Text style={[styles.normalText, {padding: 20, textAlign: 'justify'}]}> {rules} </Text>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};