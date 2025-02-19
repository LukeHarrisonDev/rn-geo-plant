import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PlantsScreen from "../screens/PlantsScreen"
import SinglePlantScreen from "../screens/SinglePlantScreen"
import FoundPlantsScreen from "../screens/FoundPlantsScreen"
import SingleFoundPlantScreen from "../screens/SingleFoundPlantScreen"
import { PlantListStackParamList } from "../types/plants"

const Stack = createNativeStackNavigator<PlantListStackParamList>()

const PlantListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlantsScreen" component={PlantsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="SinglePlantScreen" component={SinglePlantScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="FoundPlantsScreen" component={FoundPlantsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="SingleFoundPlantScreen" component={SingleFoundPlantScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>

  )
}

export default PlantListStack