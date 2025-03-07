import { ActivityIndicator, FlatList, FlatListComponent, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WhichPlantListProps } from '../types/findAPlant-types'
import { Result } from '../types/plantNetResponse-types'
import { fetchPlantNetData } from '../api'
import colours from '../config/colours'

const WhichPlantList = ({ imageUri }: WhichPlantListProps) => {

    const formData = new FormData()

    formData.append("images", {
        uri: imageUri,
        name: "plant.jpg",
        type: "image/jpeg",
    } as any)
    
    const [plantNetData, setplantNetData] = useState<Result[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    async function loadPlantNetData() {
        setIsLoading(true)
        const foundPlantsData = await fetchPlantNetData(formData)
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
                    <>
                        <Text>{item.score}</Text>
                    </>
                )
            }}
            
            />
        </>
    )
}

export default WhichPlantList

const styles = StyleSheet.create({
    whichPlantList: {
        marginTop: 20,
        alignSelf: "center",
        width: "90%",
    },

    imageContainer: {
        // flex: 1,
        width: 250,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "lightgray",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
})