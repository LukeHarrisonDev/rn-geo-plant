import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { FoundPlant } from '../types/foundPlants-types'
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
        <View>
            <Pressable onPress={() => {
                // Hard coded for now
                // navigation.navigate("SingleFoundPlantScreen", { findId: 5 })
            }}>
                <Text >FoundPlantsList</Text>
            </Pressable>
        </View>
    )
}

export default FoundPlantsList

const styles = StyleSheet.create({})