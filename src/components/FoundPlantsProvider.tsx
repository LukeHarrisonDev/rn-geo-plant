import { FlatList, StyleSheet, Text, View } from 'react-native'
import FoundPlantsList from './FoundPlantsList'
import FoundPlantsMap from './FoundPlantsMap'
import FoundPlantFilters from './FoundPlantFilters'

const FoundPlantsProvider = () => {

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