import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'

const FoundPlantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>All Plants</Text>
        </SafeAreaView>
    )
}

export default FoundPlantsScreen

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