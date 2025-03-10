import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import colours from '../config/colours'

const LoggedOutScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Geo Plant</Text>
            <View style={styles.textContainer}>
                <Text style={styles.textContent}>
                    <Text>
                        <Text style={styles.bold}>Welcome to Geo Plant!{"\n"}{"\n"}</Text>
                        An app that gets you exploring the wilderness in search of plants. It seems that you haven't logged any plants yet. Why not give it a go by tapping the magnifying glass icon at the bottom of the screen?{"\n"}{"\n"}
                        <Text style={styles.bold}>How it works:{"\n"}</Text>
                        Once you tap the magnifying glass icon, you will have the option of taking a photo or adding one from your camera roll. Make sure the photo that you take is of a plant and that the plant is clearly recognisable (the clearer the photo, the better).{"\n"}{"\n"}
                        The app will then identify your plant and show you a list of best matches. Once you've selected a match, the app will take the location from the photo. You can give the location a name, and finally, you can submit that plant to be logged.{"\n"}{"\n"}
                        From there, you can tap the Plant List icon to see which other plants you can find. You can also see a list of the plants you've found and view where they are on a map.{"\n"}{"\n"}
                        <Text style={styles.bold}>Tap the magnifying glass when you're ready.</Text>
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default LoggedOutScreen

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
    textContainer: {
        width: "90%",
        alignItems: "center",
        textAlign: "center",
    },
    textContent: {
        textAlign: "center",
        fontSize: 19
    },
    bold: {
        fontWeight: "bold",
    },
})