import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'

const SignUpScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Sign Up</Text>
        </SafeAreaView>
    )
}

export default SignUpScreen

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