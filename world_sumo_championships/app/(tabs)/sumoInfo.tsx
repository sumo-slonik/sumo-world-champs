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
                    <Text style={styles.chapterText}> {rules.chapterOneTitle} </Text>
                    <Text style={styles.rulesText}> {rules.chapterOneText} </Text>
                    <Text style={styles.chapterText}> {rules.chapterTwoTitle} </Text>
                    <Text style={styles.rulesText}> {rules.chapterTwoText} </Text>
                    <Text style={styles.chapterText}> {rules.chapterThreeTitle} </Text>
                    <Text style={styles.rulesText}> {rules.chapterThreeText} </Text>
                    <Text style={styles.chapterText}> {rules.chapterFourTitle} </Text>
                    <Text style={styles.rulesText}> {rules.chapterFourText} </Text>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};