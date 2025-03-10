import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LogYourPlantFormProps } from '../types/findAPlant-types'
import colours from '../config/colours'

const LogYourPlantForm = ({ plantName, imageUri }: LogYourPlantFormProps) => {

        const yourPlantFormData = new FormData()
    
        yourPlantFormData.append("photo_files", {
            uri: imageUri,
            name: "plant.jpg",
            type: "image/jpeg",
        } as any)

    return (
        <>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUri,
                    }}
                    />
            </View>
            <Text style={styles.text}>{`This is a ${plantName}\n\nWhere did you find it?\n\n[Input for Place Name]\n[Input for comment]\n[Submit Button]\n\nTo do:\n> Somehow need to match the data from Pl@ntNet API into plant_id for my DB:\n- (Loosly) match the name of the plant?\n- Use more of their data?\n\n> Need to get the location data from the photo\n\n> Nav to SingleFoundPlantScreen with the new find_id`}</Text>
        </>
    )
}

export default LogYourPlantForm

const styles = StyleSheet.create({
    imageContainer: {
        // flex: 1,
        width: "75%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colours.darkHighlight,
        margin: 20,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 19,
    },
})