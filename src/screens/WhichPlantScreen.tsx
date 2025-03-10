import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native'
import colours from '../config/colours'
import { WhichPlantScreenProps } from '../types/findAPlant-types'
import WhichPlantList from '../components/WhichPlantList'

const WhichPlantScreen = ({ route }: WhichPlantScreenProps) => {

    const { imageUri } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <WhichPlantList imageUri={imageUri} />
        </SafeAreaView>
    )
}

export default WhichPlantScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.primaryBackground,
        alignItems: 'center',
    },
    imageContainer: {
        margin: 30,
        height: 200,
        width: 200,
    },
    image: {
        // borderWidth: 3,
        borderRadius: 10,
        width: "100%",
        height: "100%",
        resizeMode: "contain",

    },
})