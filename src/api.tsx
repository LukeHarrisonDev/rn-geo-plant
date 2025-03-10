import axios, { AxiosInstance } from 'axios'
import { PlantsResponse, SinglePlantResponse, UserPlantsResponse } from './types/plants-types';
import { SingleFoundPlantResponse, UsersFoundPlantsResponse } from './types/foundPlants-types';
import { Result } from './types/plantNetResponse-types'
import { PLANTNET_API_KEY } from '@env'

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
    return response.data
}

export async function fetchSingleFoundPlant(findId: number): Promise<SingleFoundPlantResponse> {
    const response = await geoPlantApi.get<SingleFoundPlantResponse>(`found_plants/${findId}`)
    return response.data
}

export async function fetchPlantNetData(formData: any): Promise<{ data?: Result[], message?: string }> {
    const url = `https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=false&nb-results=3&lang=en&api-key=${PLANTNET_API_KEY}`

    // I think errors should be caught elsewhere
    try {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        if (!response.data?.results?.length) {
            return { message: "No Data" };
        }
        return { data: response.data.results }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return { message: err.response?.data.message || "API error occurred" }
        } else {
            return { message: "Unknown Error" }
        }
    }
}