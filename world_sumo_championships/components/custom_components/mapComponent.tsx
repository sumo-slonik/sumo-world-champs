import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {styles} from "@/components/custom_components/myStyles";

export const MyMap = ({markersData, selectedId, setSelectedId}) => {

    const mapRef = useRef(null);

    const mapBoundaries ={
        northEast: {
            latitude: 51.85,
            longitude: 17.46
        },
        southWest: {
            latitude: 51.68,
            longitude: 17.42
        }
    }
    const [region, setRegion] = useState({
        latitude: 51.752340,
        longitude: 17.435673,
        latitudeDelta: 0.22,
        longitudeDelta: 0.22,
    })

    const minZoomLevel = 0.3;

    const handleMarkerPress = (id) =>{
        // console.log('Marker id: ',id);
        // console.log('Selected id: ',selectedId);
        // console.log(id === selectedId);
        if (selectedId === id){
            setSelectedId(null);
        }
        else {
            setSelectedId(id);
        }
    }


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
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  provider={PROVIDER_GOOGLE}
                  style={{width: '100%', height: '100%'}}
                  region={region}
                  onRegionChangeComplete={handleChangeOfRegion}
              >
                  {markersData.map((marker) => (

                      <Marker
                          key={`${marker.id}-${marker.id === selectedId ? 'active' : 'inactive'}`}
                          coordinate={marker.coordinates}
                          // title={marker.eventName}
                          onPress={() => handleMarkerPress(marker.id)}
                          pinColor={marker.id === selectedId ? 'tan' : 'red'}
                          zIndex={marker.id === selectedId ? 1 : 0}
                      />
                  ))}
              </MapView>
          </View>
      </View>
  );
};