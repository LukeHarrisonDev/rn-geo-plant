import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import colours from '../config/colours'
//// This is old
import { PlantsCardProps } from '../types/plants'

//////////////////////////////////////////// This is old
const FoundPlantsButton = ({ navigation }: PlantsCardProps) => {
    function handlePress() {

    }
    return (

        //// Pressable is more customisable, ---Change this later ////
        <TouchableOpacity
            onPress={() => navigation.navigate("SinglePlantScreen", { plantId: 2 })}
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