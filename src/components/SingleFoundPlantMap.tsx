import { StyleSheet, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { SingleFoundPlantMapProps } from '../types/foundPlants-types'
import colours from '../config/colours'
import { useEffect, useState } from 'react'

import * as Location from 'expo-location'

const SingleFoundPlantMap = ({ foundPlant }: SingleFoundPlantMapProps) => {

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
                    latitude: foundPlant.location.lat,
                    longitude: foundPlant.location.lon,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                >
                <Marker
                    key={foundPlant.find_id}
                    coordinate={{
                        latitude: foundPlant.location.lat,
                        longitude: foundPlant.location.lon,
                    }}
                    title={foundPlant.plant_name}
                    description={foundPlant.location_name}
                    />
            </MapView>
        </View>
    )
}

export default SingleFoundPlantMap

const styles = StyleSheet.create({
    mapContainer: {
        width: "90%",
        height: 300,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    },
    map: {
        width: "100%",
        height: "100%",
    },
})