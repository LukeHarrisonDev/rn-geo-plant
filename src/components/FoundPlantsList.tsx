import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { FoundPlant, FoundPlantsListProps } from '../types/foundPlants-types'
import FoundPlantsMap from './FoundPlantsMap'
import FoundPlantFilters from './FoundPlantFilters'
import { useEffect, useState } from 'react'
import { fetchUsersFoundPlants } from '../api'

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
            // contentContainerStyle={styles.foundList}
            ListHeaderComponent={
                <>
                    <FoundPlantsMap/>
                    <FoundPlantFilters/>
                </>
            }
            data={foundPlants}
            keyExtractor={(item) => item.find_id.toString()}
            numColumns={1}
            
            renderItem={({item}) => {
                return (
                    <View>
                        <Text>
                            {item.location_name}
                        </Text>
                    </View>
                )
            }}
        />
    )
}

export default FoundPlantsList

const styles = StyleSheet.create({})