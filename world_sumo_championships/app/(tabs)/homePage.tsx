import {Text, View, Image, Linking, TouchableOpacity} from "react-native";
import * as React from "react";
import {chosenButtonColor, gradientColors, styles} from "@/components/custom_components/myStyles";
import {MyVideo} from "@/components/custom_components/myVideo";
import {videoLinks} from "@/assets/data/eventData";
import {useState} from "react";
import {LanguageSelection} from "@/components/custom_components/languageSelection";
import { LinearGradient } from 'expo-linear-gradient';

export const HomeScreen =() => {

    const [selectedId, setSelectedId] = useState(null);
    const [selectedData, setSelectedData] = useState('polish');

    const handleSelectedData = (data) => {
        setSelectedData(data)
    }



        const handlePress = async () => {
            const url = 'https://www.instagram.com/sumo_poland';
            const supported = await Linking.canOpenURL(url);

            if(supported){
                await Linking.openURL(url);
            }
        };

    return (
        <View style={[styles.defaultBackground]}>
            <LinearGradient
                colors={gradientColors}
                style={{flex: 1}}
            >
                <View style={{flex: 1}}>
                    <LanguageSelection data={Object.keys(videoLinks)} onItemPress={handleSelectedData}  selectedData={selectedData}/>
                    <MyVideo videoData={videoLinks[selectedData]}/>
                </View>
                <View style={{alignItems: 'center',justifyContent: 'center', flex: 1}}>
                    <Image
                        source={require('@/assets/myImages/Poster.jpg')}
                        style={{
                            height: 255,
                            resizeMode: 'contain',
                            flexDirection: 'row',
                        }}
                    />
                </View>
                <View style={{alignItems: 'flex-start', justifyContent: 'center', flex: 0.5, padding: 5}}>
                    <Text onPress={handlePress}>Instagram: sumo_poland </Text>
                    <Image
                        key={1}
                        source={require('@/assets/myImages/PolishSumoFederation.png')}
                        style={{ position: 'absolute',
                            right: 10,
                            bottom: 20,
                            width: 100,
                            height: 100,
                            flexDirection: 'row',
                            borderRadius: 50,
                            borderColor: chosenButtonColor,
                            borderWidth: 1
                        }}
                    />
                    <TouchableOpacity
                        style={{position: 'absolute',
                        right: 115,
                        bottom: 20,}}
                        onPress={handlePress}>
                        <Image
                            key={2}
                            source={require('@/assets/myImages/SumoPoland.png')}
                            style={{
                                width: 100,
                                height: 100,
                                flexDirection: 'row',
                                borderRadius: 50,
                                borderColor: chosenButtonColor,
                                borderWidth: 1
                    }}
                    />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};