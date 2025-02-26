import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'
import { Plant, SinglePlantScreenProps } from '../types/plants'
import SinglePlant from '../components/SinglePlant'

const SinglePlantScreen = ({ route }: SinglePlantScreenProps) => {

    const { plantId, findAmount, plantName } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <SinglePlant plantId={plantId} findAmount={findAmount} plantName={plantName}/>
            {/* <Text style={styles.titleText}>{plantId} {findAmount} {plantName}</Text> */}
        </SafeAreaView>
    )
}

export default SinglePlantScreen

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