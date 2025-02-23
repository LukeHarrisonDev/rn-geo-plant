import { NativeStackNavigationProp } from "@react-navigation/native-stack"
// import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RouteProp } from "@react-navigation/native"

//// API ////
export type Plant = {
    plant_id: number
    plant_name: string
    about_plant: string
    plant_image_url: string
    rarity: number
    season: string[]
}

export type UserPlant = Plant & {
    find_amount: number
}

export type PlantsResponse = {
    plants: Plant[]
}

export type UserPlantsResponse = PlantsResponse & {
    plants: UserPlant[]
}



//// Navigation ////
//// PlantListStack
export type PlantListStackParamList = {
    PlantsScreen: undefined
    SinglePlantScreen: { plantId: number; findAmount: number, plantName: string }
    FoundPlantsScreen: undefined
    SingleFoundPlantScreen: { findId: number }
}

//// PlantScreen
export type PlantCardNavigationProp = NativeStackNavigationProp<PlantListStackParamList, 'PlantsScreen'>

export type PlantsCardProps= {
    navigation: PlantCardNavigationProp
}

//// SinglePlantScreen
export type SinglePlantScreenProps = { route: RouteProp<PlantListStackParamList, "SinglePlantScreen"> }

//// SinglePlant
export type SinglePlantProps = { plantId: number; findAmount: number, plantName: string }

//// FoundPlantScreen
export type FoundPlantCardNavigationProp = NativeStackNavigationProp<PlantListStackParamList, 'FoundPlantsScreen'>

export type FoundPlantsCardProps= {
    navigation: FoundPlantCardNavigationProp
}