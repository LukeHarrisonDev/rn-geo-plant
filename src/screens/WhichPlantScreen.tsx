import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native'
import colours from '../config/colours'
import { WhichPlantScreenProps } from '../types/findAPlant-types'
import WhichPlantList from '../components/WhichPlantList'

const WhichPlantScreen = ({ route }: WhichPlantScreenProps) => {

    const { imageUri } = route.params
    return (
        <SafeAreaView style={styles.container}>
            {/* Use new Component Here - FlatList with the header as the Picture that was taken, and the rendered items as the results of the API */}

            {/* <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: imageUri
                    }}
                />
            </View> */}
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