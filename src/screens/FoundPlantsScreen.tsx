import { StyleSheet, SafeAreaView } from 'react-native'
import colours from '../config/colours'

import FoundPlantsList from '../components/FoundPlantsList'

const FoundPlantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FoundPlantsList/>
        </SafeAreaView>
    )
}

export default FoundPlantsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
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