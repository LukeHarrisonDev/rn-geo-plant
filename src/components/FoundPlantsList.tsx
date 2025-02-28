import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { FoundPlant } from '../types/foundPlants-types'
import FoundPlantsMap from './FoundPlantsMap'
import FoundPlantFilters from './FoundPlantFilters'
import { useEffect, useState } from 'react'
import { fetchUsersFoundPlants } from '../api'
import colours from '../config/colours'

const FoundPlantsList = () => {

    const [foundPlants, setFoundPlants] = useState<FoundPlant[]>([])
    
    async function loadUsersFoundPlants() {
        const FoundPlantsData = await fetchUsersFoundPlants(5) // Hard coded User for now
        setFoundPlants(FoundPlantsData.foundPlants)
    }

    useEffect(() => {
        loadUsersFoundPlants()
    }, [])

    return (
        <FlatList
            style={styles.foundList}
            data={foundPlants}
            keyExtractor={(item) => item.find_id.toString()}
            numColumns={1}
            ListHeaderComponent={
                <>
                    <FoundPlantsMap/>
                    <FoundPlantFilters/>
                </>
            }
            renderItem={({item}) => {
                return (
                    <Pressable
                        onPress={() => console.log(item.comment)}
                        style={styles.findCard}
                    >
                        <View>
                            
                        </View>
                        <View>

                        </View>
                        <View>

                        </View>
                        <Text>
                            {item.location_name} {item.comment}
                        </Text>
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
        position: "relative",
        borderRadius: 15,
        backgroundColor: colours.bgHighlight,
        alignItems: "center",
        margin: 8,
        padding: 7,
        alignSelf: "center",
        width: "90%",
    },
})