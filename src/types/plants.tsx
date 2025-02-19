import { NativeStackNavigationProp } from "@react-navigation/native-stack"

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
export type PlantListStackParamList = {
    PlantsScreen: undefined
    SinglePlantScreen: { plantId: number }
    FoundPlantsScreen: undefined
    SingleFoundPlantScreen: { findId: number }
}

export type PlantCardNavigationProp =
NativeStackNavigationProp<PlantListStackParamList, 'PlantsScreen'>

export type PlantsCardProps= {
    navigation: PlantCardNavigationProp
}