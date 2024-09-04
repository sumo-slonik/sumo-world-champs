import {Text, View} from "react-native";
import * as React from "react";
import {gradientColors, styles} from "@/components/custom_components/myStyles";
import {LinearGradient} from "expo-linear-gradient";
import {gender, mJunior} from "@/assets/data/eventData";
import {useEffect, useState} from "react";
import {setState} from "jest-circus";
import {BracketSelector} from "@/components/custom_components/bracketSelector";
import {CompetitorsShowOF} from "@/components/custom_components/competitorsShowOF";

export const BraketsScreen =() => {

    const [selectedGender, setSelectedGender] = useState('man');
    const [possibleAges, setPossibleAges] = useState(gender[selectedGender].map( item => item.name));
    const [selectedAge, setSelectedAge] = useState('Junior');
    const [possibleWeights, setPossibleWeights] = useState(gender[selectedGender].filter(item => item.name ===selectedAge)[0].categories.map(category => category.name));
    const [selectedWeight, setSelectedWeight] = useState(null);
    // console.log("Selected age",selectedAge)
    const handleSelectedGender =(newGender) => {
        setSelectedGender(newGender)
        setPossibleAges(gender[selectedGender].map( item => item.name))
        // console.log(possibleAges)
        // console.log("tylko gender",selectedGender)
        // handleSelectedAge(selectedAge)
        setPossibleWeights(gender[newGender].filter(item => item.name ===selectedAge)[0].categories.map(category => category.name))

    }

    const handleSelectedAge =(newAge) => {
        setSelectedAge(newAge)
        // console.log("Selected age",selectedAge, "selected gender", selectedGender)
        setPossibleWeights(gender[selectedGender].filter(item => item.name ===newAge)[0].categories.map(category => category.name))
        // console.log("weights", possibleWeights)
    }
    const handleSelectedWeight =(newWeight) => {
        setSelectedWeight(newWeight)
        // setPossibleAges(gender[selectedGender].map( item => item.name))
        // console.log("Selected weight",selectedWeight)
    }

    const competitors = gender[selectedGender]
        ?.find(ageGroup => ageGroup.name === selectedAge)
        ?.categories
        ?.find(category => category.name === selectedWeight)
        ?.competitors;

    // Użyj useEffect, aby wywołać console.log podczas renderowania
    useEffect(() => {
        console.log("Selected age",selectedAge, "selected gender", selectedGender)
        console.log("Selected weight",selectedWeight)
        console.log("Competitors list:", competitors);
    }, [competitors]); // Uruchamia się, gdy competitors się zmieni



    return (
        <LinearGradient
            colors={gradientColors}
            style={{flex: 1}}
        >
            <View style={{flex: 1}}>
                <BracketSelector key={selectedGender+selectedAge} data={Object.keys(gender)} onItemPress={handleSelectedGender} selectedData={selectedGender}/>
            </View>
            <View style={{flex: 1}}>
                <BracketSelector key={selectedGender+selectedAge} data={possibleAges} onItemPress={handleSelectedAge} selectedData={selectedAge}/>
            </View>
            <View style={{flex: 1}}>
                <BracketSelector key={selectedGender+selectedAge} data={possibleWeights} onItemPress={handleSelectedWeight} selectedData={selectedWeight}/>
            </View>
            <View style={{flex: 8}}>
                <CompetitorsShowOF/>
            </View>
        </LinearGradient>
    );
};