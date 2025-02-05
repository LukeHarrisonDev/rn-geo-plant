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