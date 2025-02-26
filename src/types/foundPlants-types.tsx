//// API ////
export type FoundPlant = {
    find_id: number
    plant_id: string
    found_by: number
    photo_url: string
    location_name: string
    location: {
        latitude: string
        longitude: string
    }
    comment: string
    created_at: string
}

export type UsersFoundPlantsResponse = {
    foundPlants: FoundPlant[]
}