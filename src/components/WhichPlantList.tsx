import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WhichPlantListProps } from '../types/findAPlant-types'
import { Result } from '../types/plantNetResponse-types'
import { fetchPlantNetData } from '../api'
import colours from '../config/colours'

const WhichPlantList = ({ imageUri, navigation }: WhichPlantListProps) => {

    const plantFormData = new FormData()

    plantFormData.append("images", {
        uri: imageUri,
        name: "plant.jpg",
        type: "image/jpeg",
    } as any)

    const [plantNetData, setplantNetData] = useState<Result[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    async function loadPlantNetData() {
        setIsLoading(true)
        const foundPlantsData = await fetchPlantNetData(plantFormData)
        if (foundPlantsData.data) {
            setplantNetData(foundPlantsData.data)
            setIsLoading(false)
        } else {
            setError(foundPlantsData.message || "An unknown error occurred")
            setIsLoading(false)
        }
    }
    useEffect(() => {
        loadPlantNetData()
    }, [])

    function handlePress(plantName: string, imageUri: string) {
        navigation.navigate("LogYourPlantScreen", { plantName, imageUri })
    }

    if(isLoading) {
        return (
            <>
                <ActivityIndicator
                    size="large"
                    color={colours.darkHighlight}  
                />
                <Text>Just checking which plant you've found...</Text>
            </>
        )
    }

    if(error) {
        return (
            <Text>
                {error}
            </Text>
        )
    }

    return (
        <>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUri,
                    }}
                />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.whichPlantList}
                data={plantNetData}
                // keyExtractor={(item) => item.find_id.toString()}
                numColumns={1}
                
                renderItem={({ item })=> {
                    return (
                        <View style={styles.thisPlantCard}>
                            <View>
                                <Text style={styles.thisPlantText}>
                                    {`There's a `}
                                    <Text style={styles.bold}>
                                    {(item.score * 100).toFixed(1)}%
                                    </Text>
                                    {` chance that this is a `}
                                    <Text style={styles.bold}>
                                    {item.species.commonNames[0]}
                                    </Text>
                                    {` and should look like the photos below`}
                                </Text>
                            </View>                            
                            <View style={styles.threeImagesContainer}>
                                <View style={styles.individualImageContainer}>
                                    <Image
                                        style={styles.thisPlantImage}
                                        source={{
                                            uri: item.images[0].url.m
                                        }}
                                    />
                                    
                                </View>
                                <View style={styles.individualImageContainer}>
                                    <Image
                                        style={styles.thisPlantImage}
                                        source={{
                                            uri: item.images[1].url.m
                                        }}
                                    />
                                </View>
                                <View style={styles.individualImageContainer}>
                                    <Image
                                        style={styles.thisPlantImage}
                                        source={{
                                            uri: item.images[2].url.m
                                        }}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    handlePress(item.species.commonNames[0], imageUri)
                                    // console.log("Yes this one!!!")
                                }} 
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>This one?</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </>
    )
}

export default WhichPlantList

const styles = StyleSheet.create({
    imageContainer: {
        // flex: 1,
        width: "75%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colours.darkHighlight,
        margin: 20,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "center",
    },
    whichPlantList: {
        // flex: 5,
        // marginTop: 20,
        alignSelf: "center",
        width: "100%",
    },
    thisPlantCard: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: 15,
        backgroundColor: colours.bgHighlight,
        alignItems: "center",
        margin: 8,
        padding: 7,
        alignSelf: "center",
        width: "90%",
    },
    thisPlantText: {
        textAlign: "center",
    },
    bold: {
        fontWeight: "bold",
    },
    threeImagesContainer: {
        height: 125,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
    individualImageContainer: {
        flex: 1,
        margin: 5,
    },
    thisPlantImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    button: {
        width: "60%",
        padding: 10,
        margin: 5,
        backgroundColor: colours.darkHighlight,
        alignItems: "center",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
    },
})