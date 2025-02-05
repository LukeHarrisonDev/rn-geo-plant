import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'

const SingleFoundPlantScreen = () => {
return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>*Place and Plant Name*</Text>
        </SafeAreaView>
    )
}

export default SingleFoundPlantScreen

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