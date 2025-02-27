import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { FoundPlant, FoundPlantsListProps } from '../types/foundPlants-types'

const FoundPlantsList = ({foundPlants}: FoundPlantsListProps) => {



    return (
        <FlatList
            // contentContainerStyle={styles.foundList}
            data={foundPlants}
            keyExtractor={(item) => item.find_id.toString()}
            numColumns={1}
            
            renderItem={({item}) => {
                return (
                    <View>
                        <Text>
                            {item.location_name}
                        </Text>
                    </View>
                )
            }}
        />
    )
}

export default FoundPlantsList

const styles = StyleSheet.create({})