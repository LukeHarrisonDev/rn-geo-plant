import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { Plant, SinglePlantProps } from '../types/plants'
import { useEffect, useState } from 'react'
import { fetchSinglePlant } from '../api'
import colours from '../config/colours'

const SinglePlant = ({plantId, findAmount, plantName}: SinglePlantProps) => {

        const [plant, setPlant] = useState<Plant | null>(null)

        async function loadSinglePlant(plantId: number) {
            const singlePlantFromApi = await fetchSinglePlant(plantId)
            setPlant(singlePlantFromApi.plant)
        }
        useEffect(() => {
            loadSinglePlant(plantId)
        }, [])
    
        return (
        <View style={styles.singlePlantContainer}>
            <Image
                style={styles.image}
                source={{uri: plant?.plant_image_url}}
            />
            <Text style={styles.singlePlantText}>{plant?.about_plant}</Text>
            <View style={styles.statsContainer}>
                <Text style={styles.seasons}>
                    Seasons: {plant?.season.join(" & ")}
                </Text>
                <Text style={styles.rarity}>
                    Rarity: {plant?.rarity}
                </Text>
                <Text style={styles.found}>
                    Found: {findAmount}
                </Text>

            </View>
        </View>
    )
}

export default SinglePlant

const styles = StyleSheet.create({
    singlePlantContainer: {
        position: "relative",
        borderRadius: 15,
        backgroundColor: colours.bgHighlight,
        alignItems: "center",
        margin: 20,
        padding: 7,
        alignSelf: "center",
        width: "90%",
        // height: "95%", ***
    },
    image: {
        borderWidth: 3,
        borderRadius: 10,
        width: "90%",
        aspectRatio: 1,
        margin: 20,
    },
    singlePlantText: {
        marginHorizontal: 20,
        textAlign: "center",
    },
    statsContainer: {
        //// *** Use these to change the length of the whole box
        // bottom: 0
        // position: "absolute",
        position: "relative",
        width: "90%",
        height: 50,
        margin: 20,
    },
    seasons: {
        position: "absolute",
        left: 0,
        bottom: 0,
        fontWeight: "bold",
    },
    rarity: {
        position: "absolute",
        top: 0,
        right: 0,
        fontWeight: "bold",
    },
    found: {
        position: "absolute",
        bottom: 0,
        right: 0,
        fontWeight: "bold",
    }
})