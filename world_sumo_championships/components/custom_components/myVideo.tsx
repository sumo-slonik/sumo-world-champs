import React from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {styles} from "@/components/custom_components/myStyles";

export const MyVideo = ({videoData}) => {

    console.log("Link:", videoData[0].link)
    console.log("calosc:", videoData)

    return (
        <View style={[styles.defaultBackground, {padding: 10, backgroundColor: 'transparent'}]}>
            <YoutubePlayer
                style={{alignSelf: 'stretch'}}
                height={400}
                play={true}
                videoId={videoData[0].link}
            />

        </View>
    )
}
