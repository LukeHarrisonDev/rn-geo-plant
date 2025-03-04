import { StyleSheet, SafeAreaView } from 'react-native'
import colours from '../config/colours'

import FoundPlantsList from '../components/FoundPlantsList'
import { FoundPlantsScreenProps } from '../types/foundPlants-types'

const FoundPlantsScreen = ({ navigation }: FoundPlantsScreenProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <FoundPlantsList navigation={navigation}/>
        </SafeAreaView>
    )
}

export default FoundPlantsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colours.primaryBackground,
        alignItems: 'center',
    },
    titleText: {
        fontFamily: "PMarker",
        color: colours.dark,
        fontSize: 60,
        textAlign: "center",
        width: "100%",
    }, 
})