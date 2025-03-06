import { Pressable, Alert, StyleSheet } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { FindAPlantScreenProps } from "../types/findAPlant-types"
import colours from "../config/colours"

const FindAPlantAlert = ({ navigation }: FindAPlantScreenProps) => {

    const handleCameraPress = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== "granted") {
            Alert.alert("Permission Required", "Camera access is needed to take a photo.")
            return
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ["images"],
            quality: 1,
        })

        if (!result.canceled) {
            navigation.navigate("WhichPlantScreen", { imageUri: result.assets[0].uri })
        }
    }

    const handleLibraryPress = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
            Alert.alert("Permission Required", "Photo Library access is needed to pick an image.")
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            quality: 1,
        })

        if (!result.canceled) {
            navigation.navigate("WhichPlantScreen", { imageUri: result.assets[0].uri })
        }
    }

    const handlePress = () => {
        Alert.alert(
            "Find a Plant",
            "Log your photo",
            [
                { text: "Take a Photo", onPress: handleCameraPress },
                { text: "Photo Library", onPress: handleLibraryPress },
                { text: "Cancel", style: "cancel" },
            ]
        )
    }

    return (
        <Pressable style={styles.yo} onPress={handlePress} />
    )
}

export default FindAPlantAlert

const styles = StyleSheet.create({
    yo: {
        alignSelf: "center",
        width: 300,
        height: 600,
        backgroundColor: colours.darkHighlight
    }
})