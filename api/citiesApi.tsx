import { Cities } from "../promiseInterface/citiesType"
import { City } from "../promiseInterface/cityType"

export const getCities = async (): Promise<Cities> => {
  const response = await fetch('https://geo.api.gouv.fr/communes')
  const cities = await response.json()
  // Fichier json trop long ...
  cities.length = 100

  if (!response.ok) {
    throw new Error('error')
  }
  return cities
}

export const getCity = async (code: number): Promise<City> => {
  const response = await fetch(`https://geo.api.gouv.fr/communes/${code}`)
  const city = await response.json()
  return city
}
