import {Text, View} from "react-native";
import * as React from "react";
import {styles} from "@/components/custom_components/myStyles";
import {MyMap} from "@/components/custom_components/mapComponent";
import {MyHarmonogram} from "@/components/custom_components/harmonogram";
import {thursdayData} from "@/assets/data/eventData";
import {useState} from "react";


export const CompetitionInfoScreen =() => {

    const [selectedId, setSelectedId] = useState(null);
    return (
        <View style={[styles.defaultBackground]}>
            <View style={[styles.defaultBackground, {flex: 3}]}>
                <MyMap markersData={thursdayData} selectedId={selectedId} setSelectedId={setSelectedId}></MyMap>
            </View>
            <View style={[styles.defaultBackground, {flex: 2}]}>
                <MyHarmonogram data={thursdayData} selectedId={selectedId} setSelectedId={setSelectedId}/>
            </View>
        </View>


    );
};