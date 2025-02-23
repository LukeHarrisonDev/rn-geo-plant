import { StyleSheet, Text, View } from 'react-native'
import { Plant, SinglePlantProps } from '../types/plants'
import { useState } from 'react'

const SinglePlant: React.FC<SinglePlantProps> = ({plantId, findAmount, plantName}) => {

        const [plant, setPlant] = useState<Plant[]>([])
    
        return (
        <View>
            <Text>SinglePlant {plantId}, {findAmount}, {plantName}</Text>
        </View>
    )
}

export default SinglePlant

const styles = StyleSheet.create({})