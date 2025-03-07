import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

//// Navigation ////
//// FindAPlantStack
export type FindAPlantStackParamList = {
    FindAPlantAlert: undefined
    WhichPlantScreen: { imageUri: string }
}

export type FindAPlantAlertNavigationProp = NativeStackNavigationProp<FindAPlantStackParamList, 'FindAPlantAlert'>

export type FindAPlantScreenProps= {
    navigation: FindAPlantAlertNavigationProp
}



export type WhichPlantScreenProps = { 
    route: RouteProp<FindAPlantStackParamList, "WhichPlantScreen">
}

export type WhichPlantListProps = {
    imageUri: string
}