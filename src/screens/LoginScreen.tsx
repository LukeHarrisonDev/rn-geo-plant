import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Login</Text>
        </SafeAreaView>
    )
}

export default LoginScreen

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