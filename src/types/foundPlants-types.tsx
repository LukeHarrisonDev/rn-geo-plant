import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { PlantListStackParamList } from "./plants-types"
import { RouteProp } from "@react-navigation/native"

//// APIs ////
export type UserFoundPlant = {
    find_id: number
    plant_id: number
    found_by: number
    photo_urls: string[]
    location_name: string
    location: {
        lat: number
        lon: number
    }
    comment: string
    created_at: string
    photo_cloud_names: string[]
    plant_name: string
    season: string[]
}

export type UsersFoundPlantsResponse = {
    foundPlants: UserFoundPlant[]
}

export type FoundPlantsMapProps = {
    foundPlants: UserFoundPlant[]
}

export type FoundPlant = {
    find_id: number
    plant_id: number
    found_by: number
    photo_urls: string[]
    location_name: string
    location: {
        lat: number
        lon: number
    }
    comment: string
    created_at: string
    photo_cloud_names: string[]
    plant_name: string
    time?: string
    date?: string
}

export type SingleFoundPlantResponse = {
    foundPlant: FoundPlant
}

export type SingleFoundPlantMapProps = {
    foundPlant: FoundPlant
}



//// Navigation ////
//// FoundPlantScreen
export type FoundPlantScreenNavigationProp = NativeStackNavigationProp<PlantListStackParamList, 'FoundPlantsScreen'>

export type FoundPlantsScreenProps= {
    navigation: FoundPlantScreenNavigationProp
}

//// SingleFoundPlantScreen
export type SingleFoundPlantScreenProps = { route: RouteProp<PlantListStackParamList, "SingleFoundPlantScreen"> }

//// SingleFoundPlant
export type SingleFoundPlantProps = { findId: number, plantName: string }