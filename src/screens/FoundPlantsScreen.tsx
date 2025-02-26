import { StyleSheet, SafeAreaView } from 'react-native'
import colours from '../config/colours'

import { FoundPlantsCardProps } from '../types/plants'
import FoundPlantsProvider from '../components/FoundPlantsProvider'

const FoundPlantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FoundPlantsProvider/>
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