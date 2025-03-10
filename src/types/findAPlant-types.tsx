import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

//// Navigation ////
//// FindAPlantStack
export type FindAPlantStackParamList = {
    FindAPlantAlert: undefined
    WhichPlantScreen: { imageUri: string }
    LogYourPlantScreen: { plantName: string, imageUri: string }
}

export type FindAPlantStackNavigationProp = NativeStackNavigationProp<FindAPlantStackParamList>

export type FindAPlantScreenProps= {
    navigation: FindAPlantStackNavigationProp
}

export type WhichPlantScreenProps = { 
    route: RouteProp<FindAPlantStackParamList, "WhichPlantScreen">
    navigation: FindAPlantStackNavigationProp
}

export type WhichPlantListProps = {
    imageUri: string
    navigation: FindAPlantStackNavigationProp
}

export type LogYourPlantScreenProps = {
    route: RouteProp<FindAPlantStackParamList, "LogYourPlantScreen">
    navigation: FindAPlantStackNavigationProp
}

export type LogYourPlantFormProps = {
    imageUri: string
    plantName: string
    navigation: FindAPlantStackNavigationProp
}