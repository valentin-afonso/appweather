export const getWeather = async (cityname) => {
  const response = await fetch(`https://weather-api.mathisbarre.com/${cityname}`)
  const weather = await response.json()

  if (!response.ok) {
    throw new Error('error')
  }
  return weather
}

export const getWeatherDetails = async (cityname, date) => {
  const response = await fetch(`https://weather-api.mathisbarre.com/${cityname}/${date}`)
  const weatherDetails = await response.json()

  if (!response.ok) {
    throw new Error('error')
  }
  return weatherDetails
}

export const getDateDay = (dateParam) => {
  const dayNames = [
    'Lun',
    'Mar',
    'Mer',
    'Jeu',
    'Ven',
    'Sam',
    'Dim'
  ]
  const date = new Date(dateParam)
  const dayname = dayNames[date.getDay()]
  return dayname
}

export const getDateHours = (dateParam) => {
  const date = new Date(dateParam)
  const hours = date.getHours()
  return hours
}
