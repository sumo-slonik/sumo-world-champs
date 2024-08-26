import {Text, View} from "react-native";
import * as React from "react";
import {styles} from "@/components/custom_components/myStyles";
import {MyMap} from "@/components/custom_components/mapComponent";
import {MyHarmonogram} from "@/components/custom_components/harmonogram";
import {DayChoosingComponent} from "@/components/custom_components/daySelection";
import {everyDayData} from "@/assets/data/eventData";
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";


export const CompetitionInfoScreen =() => {

    const [selectedId, setSelectedId] = useState(null);
    const [selectedData, setSelectedData] = useState('thursday');

    const handleSelectedData = (data) => {
        // console.log("Selected day:", data);
        // console.log("Selected data:", everyDayData[data]);
        setSelectedData(data)
    }

    return (
        <LinearGradient
            colors={["#ab7668","#e8b3a2"]}
            style={{flex: 1}}
        >
            <View style={[styles.defaultBackground]}>
                <View style={[styles.defaultBackground, {flex: 3}]}>
                    <MyMap markersData={everyDayData[selectedData]} selectedId={selectedId} setSelectedId={setSelectedId}></MyMap>
                </View>
                <View style={[styles.defaultBackground, {flex: 0.4}]}>
                    <DayChoosingComponent data={Object.keys(everyDayData)} onItemPress={handleSelectedData}  selectedData={selectedData}/>
                </View>
                <View style={[styles.defaultBackground, {flex: 2}]}>
                    <MyHarmonogram key={selectedData} data={everyDayData[selectedData]} selectedId={selectedId} setSelectedId={setSelectedId}/>
                </View>
            </View>
        </LinearGradient>


    );
};