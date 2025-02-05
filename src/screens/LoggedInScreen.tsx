import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'

const LoggedInScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Geo Plant</Text>
        </SafeAreaView>
    )
}

export default LoggedInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.primaryBackground,
        alignItems: 'center',
    },
    titleText: {
        color: colours.dark,
        fontSize: 80
    },
})