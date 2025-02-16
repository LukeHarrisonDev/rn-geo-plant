import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'

const LoggedOutScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Geo Plant</Text>
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
})