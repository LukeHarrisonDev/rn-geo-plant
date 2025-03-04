import { Image, StyleSheet, Text, View } from 'react-native'
import { FoundPlant, SingleFoundPlantProps } from '../types/foundPlants-types'
import { useEffect, useState } from 'react'
import { fetchSingleFoundPlant } from '../api'
import colours from '../config/colours'
import { formatDate, formatTime } from '../utils/date-and-time'

const SingleFoundPlant = ({ findId }: SingleFoundPlantProps) => {

	const [foundPlant, setFoundPlant] = useState<FoundPlant | null>(null)

	async function loadSingleFoundPlant(findId: number) {
		const singleFoundPlantData = await fetchSingleFoundPlant(findId)
		singleFoundPlantData.foundPlant.time = formatTime(singleFoundPlantData.foundPlant.created_at)
		singleFoundPlantData.foundPlant.date = formatDate(singleFoundPlantData.foundPlant.created_at)
		setFoundPlant(singleFoundPlantData.foundPlant)
	}
	
	useEffect(() => {
		loadSingleFoundPlant(findId)
	}, [])

	return (
		<View style={styles.foundPlantContainer}>
			<Text style={styles.foundAtText}>Found at {foundPlant?.location_name}</Text>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={{uri: foundPlant?.photo_urls[0]}}
				/>
			</View>
			<Text style={styles.comment}>My Comment:</Text>
			<Text> {foundPlant?.comment}</Text>
			<Text>MAP VIEW</Text>
			<View style={styles.statsContainer}>
				<Text style={styles.found}>
				Found: {foundPlant?.time} - {foundPlant?.date}
				</Text>
			</View>
		</View>
	)
}

export default SingleFoundPlant

const styles = StyleSheet.create({
	foundPlantContainer: {
		position: "relative",
		borderRadius: 15,
		backgroundColor: colours.bgHighlight,
		alignItems: "center",
		margin: 20,
		padding: 7,
		alignSelf: "center",
		width: "90%",
		// height: "95%", ***
	},
	foundAtText: {
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center"
	},
	imageContainer: {
        width: "90%",
		aspectRatio: 1 / 1,
        alignItems: "center",
        justifyContent: "center",
		margin: 20,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
	comment: {
		fontWeight: "bold"
	},
	statsContainer: {
        //// *** Use these to change the length of the whole box
        // bottom: 0
        // position: "absolute",
        position: "relative",
        width: "90%",
        height: 50,
        margin: 20,
    },
	found: {
        position: "absolute",
        right: 0,
        bottom: 0,
        fontWeight: "bold",
    },
})