export const getWeather = async (cityname) => {
    const response = await fetch(`https://www.prevision-meteo.ch/services/json/${cityname}`);
    const weather = await response.json();
    return weather;
}