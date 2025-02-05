import { Text, FlatList, StyleSheet } from 'react-native'

const PlantsList = () => {
  return (
    <FlatList
      data={["Hello", "How are you?"]}
      renderItem={({item}) => {
        return (
          <Text>{item}</Text>
        )
      }}/>
  )
}

export default PlantsList

const styles = StyleSheet.create({})