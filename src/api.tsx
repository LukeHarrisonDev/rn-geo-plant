import axios, { AxiosInstance } from 'axios'
import { PlantsResponse, SinglePlantResponse, UserPlantsResponse } from './types/plants';
import { UsersFoundPlantsResponse } from './types/foundPlants-types';

const geoPlantApi: AxiosInstance = axios.create({
    baseURL: "https://geo-plant.onrender.com/api"
})

export async function fetchPlants(): Promise<PlantsResponse> {
    const response = await geoPlantApi.get<PlantsResponse>("/plants")
    return response.data
}

export async function fetchUsersPlants(userId: number): Promise<UserPlantsResponse> {
    const response = await geoPlantApi.get<UserPlantsResponse>(`/users/${userId}/plants`)
    return response.data
}

export async function fetchSinglePlant(plantId: number): Promise<SinglePlantResponse> {
    const response = await geoPlantApi.get<SinglePlantResponse>(`plants/${plantId}`)
    return response.data
}

export async function fetchUsersFoundPlants(userId: number): Promise<UsersFoundPlantsResponse> {
    const response = await geoPlantApi.get<UsersFoundPlantsResponse>(`users/${userId}/found_plants`)
    console.log(response,"<<< Response")
    return response.data
}