//// API ////
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
    season: string[]
}

export type UsersFoundPlantsResponse = {
    foundPlants: FoundPlant[]
}

export type FoundPlantsMapProps = {
    foundPlants: FoundPlant[]
}