import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import colours from '../config/colours'

const FoundPlantsButton = () => {
    return (
        //// Pressable is more customisable
        <TouchableOpacity
            onPress={() => console.log("Plant Map Pressed")}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Plant Map</Text>
        </TouchableOpacity>
    )
}

export default FoundPlantsButton

const styles = StyleSheet.create({
    button: {
        width: "70%",
        padding: 10,
        margin: 20,
        backgroundColor: colours.darkHighlight,
        alignItems: "center",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 25
    }
})