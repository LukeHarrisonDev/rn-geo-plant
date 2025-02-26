import { Pressable, StyleSheet, Text, View } from 'react-native'

const FoundPlantsList = () => {



    return (
        <View>
            <Pressable onPress={() => {
                // Hard coded for now
                // navigation.navigate("SingleFoundPlantScreen", { findId: 5 })
            }}>
                <Text >FoundPlantsList</Text>
            </Pressable>
        </View>
    )
}

export default FoundPlantsList

const styles = StyleSheet.create({})