import React, {useRef, useState} from 'react';
import {Dimensions, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import {inspect} from "util";
import {styles} from "@/components/custom_components/myStyles";

export const MyMap = () => {

    const mapRef = useRef(null);

    const mapBoundaries ={
        northEast: {
            latitude: 51.72,
            longitude: 17.46
        },
        southWest: {
            latitude: 51.68,
            longitude: 17.42
        }
    }
    const [region, setRegion] = useState({
        latitude: 51.692340,
        longitude: 17.435673,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09,
    })

    const minZoomLevel = 0.1;

    const handleChangeOfRegion = (newRegion) =>{
        if (newRegion.longitude > mapBoundaries.northEast.longitude){
            newRegion.longitude = mapBoundaries.northEast.longitude;
        } else if (newRegion.longitude < mapBoundaries.southWest.longitude){
            newRegion.longitude = mapBoundaries.southWest.longitude;
        }

        if (newRegion.latitude > mapBoundaries.northEast.latitude){
            newRegion.latitude = mapBoundaries.northEast.latitude;
        } else if (newRegion.latitude < mapBoundaries.southWest.latitude){
            newRegion.latitude = mapBoundaries.southWest.latitude;
        }
        if (newRegion.latitudeDelta > minZoomLevel){
            newRegion.latitudeDelta=minZoomLevel
            newRegion.longitudeDelta=minZoomLevel
        }
        setRegion(newRegion);

    }

  return (
      <View style={{padding: 20}}>
          <View style={[styles.mapStyle]}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={{width: '100%', height: '100%'}}
                region={region}
                onRegionChangeComplete={handleChangeOfRegion}
            // zoomEnabled={false}
            />
          </View>
      </View>
  );
};