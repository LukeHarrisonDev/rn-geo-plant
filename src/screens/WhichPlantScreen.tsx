import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'

const WhichPlantScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Login</Text>
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
    titleText: {
        color: colours.dark,
        fontSize: 80
    },
})