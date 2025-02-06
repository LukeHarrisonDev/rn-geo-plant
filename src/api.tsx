import axios, { AxiosInstance } from 'axios'
import { PlantsResponse, UserPlantsResponse } from './types/plants';

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