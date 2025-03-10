import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { FoundPlantsMapProps } from '../types/foundPlants-types'
import colours from '../config/colours'
import { useEffect, useState } from 'react'

import * as Location from 'expo-location'

const FoundPlantsMap = ({foundPlants}: FoundPlantsMapProps) => {

    const [location, setLocation] = useState<Location.LocationObject | null>(null)

    async function getCurrentLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            console.log('Permission to access location was denied')
            return
        }
    
        let location = await Location.getCurrentPositionAsync({})
        setLocation(location)
    }

    useEffect(() => {
        getCurrentLocation()
    }, [])
    
    return (
        <View style={styles.mapContainer}>
            <MapView
                // provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation
                initialRegion={{
                    latitude: 53.9425,
                    longitude: -1.9101,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}
                >
                {foundPlants.map((foundPlant) => {
                    return (
                        <Marker
                            key={foundPlant.find_id}
                            coordinate={{
                                latitude: foundPlant.location.lat,
                                longitude: foundPlant.location.lon,
                            }}
                            title={foundPlant.plant_name}
                            description={foundPlant.location_name}
                        />
                    )
                })}
            </MapView>
        </View>
    )
}

export default FoundPlantsMap

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        width: "90%",
        height: 300,
        backgroundColor: colours.bgHighlight,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    map: {
        width: "90%",
        height: "90%",
    },
})