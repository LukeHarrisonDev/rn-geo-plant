import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { fetchPlants } from '../api'
import { useEffect, useState } from 'react'
import { Plant } from '../types/plants'

const PlantsList = () => {

    const [plantList, setPlantList] = useState<Plant[]>([])
    
    useEffect(() => {
        async function loadPlants() {
        const plantListFromApi = await fetchPlants()
        setPlantList(plantListFromApi.plants)
        }
        loadPlants()
    }, [])

    return (
        <FlatList
        data={plantList}
        renderItem={({item}) => {
            return (
            <View>
                <Text>{item.plant_name}</Text>
                <Text>{item.about_plant}</Text>
                <Image
                style={{width: 200, height: 200}}
                source={{
                    uri: item.plant_image_url,
                }}/>
                <Text>{item.season}</Text>
                <Text>{`\n`}</Text>
            </View>
            )
        }}
        />
    )
}

export default PlantsList

const styles = StyleSheet.create({})