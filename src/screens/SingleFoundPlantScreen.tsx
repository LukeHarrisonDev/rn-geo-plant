import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'
import { SingleFoundPlantScreenProps } from '../types/foundPlants-types'
import SingleFoundPlant from '../components/SingleFoundPlant'

const SingleFoundPlantScreen = ({ route }: SingleFoundPlantScreenProps) => {

    const { findId, plantName } = route.params

    return (
        <SafeAreaView style={ styles.container }>
            <SingleFoundPlant findId={ findId } plantName={plantName} />
        </SafeAreaView>
    )
}

export default SingleFoundPlantScreen

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