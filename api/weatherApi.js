/*
export const getWeather = async (cityname) => {
    const response = await fetch(`https://www.prevision-meteo.ch/services/json/${cityname}`);
    const weather = await response.json();
    return weather;
}
*/
export const getWeather = async (cityname) => {
    const response = await fetch(`https://weather-api.mathisbarre.com/${cityname}`);
    const weather = await response.json();
    return weather;
}
/*
export const getDay = (dateParam) => {
    var dayNames = [
        "Lun",
        "Mar",
        "Mer",
        "Jeu",
        "Ven",
        "Sam",
        "Dim"
    ];
    var date = new Date(dateParam);
    var dd = date.getDate();
    var dayname = dayNames[date.getDay() - 1];
    var mm = monthNames[date.getMonth()];
    var yyyy = date.getFullYear();
    var fullDate = dayname + " " + dd + " " + mm + " " + yyyy;
    day = "";
    return day;
}
*/