import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'
import PlantsList from '../components/PlantsList'
import FoundPlantsButton from '../components/FoundPlantsButton'

const PlantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>All Plants</Text>
      <PlantsList/>
      <FoundPlantsButton/>
    </SafeAreaView>
  )
}

export default PlantsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primaryBackground,
    alignItems: 'center',
    position: "relative"
  },
  titleText: {
    color: colours.dark,
    fontSize: 80
  },
})