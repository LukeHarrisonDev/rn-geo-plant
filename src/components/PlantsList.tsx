import { Pressable, Text, FlatList, StyleSheet, Image, ActivityIndicator, View } from 'react-native'
import { fetchUsersPlants } from '../api'
import { useEffect, useState } from 'react'
import { UserPlant } from '../types/plants'
import colours from '../config/colours'

const PlantsList = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [plantList, setPlantList] = useState<UserPlant[]>([])
    
    useEffect(() => {
        setIsLoading(true)
        async function loadUserPlants() {
            const plantListFromApi = await fetchUsersPlants(5) // Hard coded User for now
            setPlantList(plantListFromApi.plants)
        }
        loadUserPlants()
        setIsLoading(false)
    }, [])

    function handlePress () {
        console.log("Hello")
    }

    if(isLoading) {
        return (
            <ActivityIndicator
                size="large"
                color={colours.darkHighlight}  
            />
        )
    }

    return (
        <FlatList
            contentContainerStyle={styles.list}
            data={plantList}
            keyExtractor={(item) => item.plant_id.toString()}
            numColumns={2}
            renderItem={({item}) => {
                return (
                    <Pressable 
                        onPress={() => {
                            handlePress()
                        }}
                        style={styles.plantCard}
                        ////// Grey Background for cards if not found!
                        // style={item.find_amount === 0 ? styles.dark : styles.plantCard}
                    >
                        {/* ////// Alternate Grey Foreground for cards if not found!*/}
                        {item.find_amount === 0 ? <View style={styles.greyCard}/> : null}
                        <Image
                            style={styles.image}
                            source={{
                                uri: item.plant_image_url,
                            }}
                            />
                        <Text style={styles.cardTitle}>{item.plant_name}</Text>
                        {/* <Text style={styles.text}>Appears in: {"\n"}{item.season}</Text> */}
                        {/* <View style={styles.foundText}> */}
                            <Text style={styles.foundText}>{item.find_amount === 0 ? `Not Found` : `Found: ${item.find_amount}`}</Text>
                        {/* </View> */}
                        <Text>{`\n`}</Text>
                    </Pressable>
                )
            }}
        />
    )
}

export default PlantsList

const styles = StyleSheet.create({
    list: {
        alignSelf: "center",
        alignItems: "center",
    },
    plantCard: {
        position: 'relative',
        borderRadius: 15,
        backgroundColor: colours.bgHighlight,
        alignItems: "center",
        margin: 8,
        padding: 7,
        alignSelf: "center",
    },
    // Size is not dynamic...
    greyCard: {
        position: "absolute",
        width: 164,
        height: 215,
        backgroundColor: "grey",
        zIndex: 1,
        opacity: 0.8,
        borderRadius: 15,
    },
    // I'm sure theres a better way to do this...
    dark: {
        position: 'relative',
        borderRadius: 15,
        backgroundColor: "grey",
        alignItems: "center",
        margin: 8,
        padding: 7,
        alignSelf: "center",
    },
    image: {
        borderWidth: 3,
        borderRadius: 10,
        width: 150,
        height: 150,
    },
    cardTitle: {
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        textAlign: "center",
    },
    foundText: {
        textAlign: "right",
        alignSelf: "flex-end",
        position: 'absolute',
        bottom: 7,
        right: 7,
    }
})