import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { FoundPlant, FoundPlantsScreenProps } from '../types/foundPlants-types'
import FoundPlantsMap from './FoundPlantsMap'
import FoundPlantFilters from './FoundPlantFilters'
import { useEffect, useState } from 'react'
import { fetchUsersFoundPlants } from '../api'
import colours from '../config/colours'
import { formatDate, formatTime } from '../utils/date-and-time'

const FoundPlantsList = ({ navigation }: FoundPlantsScreenProps) => {

    const [foundPlants, setFoundPlants] = useState<FoundPlant[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    
    async function loadUsersFoundPlants() {
        setIsLoading(true)
        const FoundPlantsData = await fetchUsersFoundPlants(5) // Hard coded User for now
        setFoundPlants(FoundPlantsData.foundPlants)
        setIsLoading(false)
    }

    async function handleRefresh() {
        setRefreshing(true)
        setTimeout(async () => {
            await loadUsersFoundPlants()
            setRefreshing(false)
        }, 1500)
    }

    useEffect(() => {
        loadUsersFoundPlants()
    }, [])

    function handlePress(findId: number, plantName: string) {
        navigation.navigate("SingleFoundPlantScreen", { findId, plantName })

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
            style={styles.foundList}
            data={foundPlants}
            keyExtractor={(item) => item.find_id.toString()}
            numColumns={1}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            ListHeaderComponent={
                <>
                    <FoundPlantsMap foundPlants={foundPlants}/>
                    <FoundPlantFilters/>
                </>
            }
            renderItem={({item}) => {
                return (
                    <Pressable
                        onPress={() => () => handlePress(item.find_id, item.plant_name)}
                        style={styles.findCard}
                    >
                        <Pressable onPress={() => {console.log(item.location)}}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: item.photo_urls[0],
                                        }}
                                    />
                            </View>
                        </Pressable>
                        <View style={styles.textContent}>
                            <Text style={styles.plantName}>
                                {item.plant_name}
                            </Text>
                            <Text style={styles.locationName}>
                                {item.location_name}
                            </Text>
                            <Text style={styles.foundText}>
                                Found: {formatTime(item.created_at)} - {formatDate(item.created_at)}
                            </Text>
                        </View>
                       
                    </Pressable>
                )
            }}
        />
    )
}

export default FoundPlantsList

const styles = StyleSheet.create({
    foundList: {
        marginTop: 20,
        alignSelf: "center",
        width: "90%",
    },
    findCard: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        position: "relative",
        borderRadius: 15,
        backgroundColor: colours.bgHighlight,
        // alignItems: "center",
        margin: 8,
        padding: 7,
        alignSelf: "center",
        width: "90%",
    },
    imageContainer: {
        flex: 1,
        width: 75,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "lightgray",

    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    textContent: {
        position: "relative",
        flex: 2,
        marginLeft: 10,
        // backgroundColor: "blue"
    },
    plantName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    locationName: {
        fontSize: 15
    },
    foundText: {
        position: "absolute",
        bottom: 0,
        right: 0,
    }
})