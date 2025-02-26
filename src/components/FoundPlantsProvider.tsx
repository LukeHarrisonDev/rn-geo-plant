import { FlatList, StyleSheet, Text, View } from 'react-native'
import FoundPlantsList from './FoundPlantsList'
import FoundPlantsMap from './FoundPlantsMap'
import FoundPlantFilters from './FoundPlantFilters'
import { useEffect, useState } from 'react'
import { FoundPlant } from '../types/foundPlants-types'
import { fetchUsersFoundPlants } from '../api'

const FoundPlantsProvider = () => {

        const [foundPlants, setFoundPlants] = useState<FoundPlant[]>([])

        async function loadUsersFoundPlants() {
            const FoundPlantsData = await fetchUsersFoundPlants(5) // Hard coded User for now
            setFoundPlants(FoundPlantsData.foundPlants)
        }

        useEffect(() => {
            loadUsersFoundPlants()
        }, [])

    return (
        <View>
            <FoundPlantsMap/>
            <FoundPlantFilters/>
            <FoundPlantsList/>
        </View>
    )
}

export default FoundPlantsProvider

const styles = StyleSheet.create({})