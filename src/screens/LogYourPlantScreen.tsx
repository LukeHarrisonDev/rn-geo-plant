import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native'
import colours from '../config/colours'
import { LogYourPlantScreenProps } from '../types/findAPlant-types'
import LogYourPlantForm from '../components/LogYourPlantForm'

const LogYourPlantScreen = ({ route, navigation }: LogYourPlantScreenProps) => {

    const { plantName, imageUri } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <LogYourPlantForm imageUri={imageUri} plantName={plantName} navigation={navigation}/>
        </SafeAreaView>
    )
}

export default LogYourPlantScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.primaryBackground,
        alignItems: 'center',
    },
    titleText: {
        fontFamily: "PMarker",
        color: colours.dark,
        fontSize: 60
    },
})