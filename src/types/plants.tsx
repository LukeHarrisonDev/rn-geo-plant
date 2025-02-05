export type Plant = {
    plant_id: number
    plant_name: string
    about_plant: string
    plant_image_url: string
    rarity: number
    season: string[]
    find_amount: number
}
  
export type ApiResponse = {
    plants: Plant[]
}