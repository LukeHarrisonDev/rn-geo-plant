import { StyleSheet, Text, SafeAreaView } from 'react-native'
import colours from '../config/colours'
import PlantsList from '../components/PlantsList'
import FoundPlantsButton from '../components/FoundPlantsButton'
import { PlantsCardProps } from '../types/plants'

const PlantsScreen = ({ navigation }: PlantsCardProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>All Plants</Text>
      <PlantsList navigation={navigation}/>
      {/* <FoundPlantsButton/> */}
    </SafeAreaView>
  )
}

export default PlantsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primaryBackground,
    alignItems: 'center',
    position: "relative",
  },
  titleText: {
    fontFamily: "PMarker",
    color: colours.dark,
    fontSize: 60,
    textAlign: "center",
    width: "100%",
  },
})