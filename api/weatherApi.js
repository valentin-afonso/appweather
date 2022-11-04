export const getWeather = async (cityname) => {
    const response = await fetch(`https://weather-api.mathisbarre.com/${cityname}`);
    const weather = await response.json();

    if (!response.ok) {
        throw new Error("error");
    }
    return weather;
}

export const getWeatherDetails = async (cityname, date) => {
    const response = await fetch(`https://weather-api.mathisbarre.com/${cityname}/${date}`);
    const weatherDetails = await response.json();

    if (!response.ok) {
        throw new Error("error");
    }
    return weatherDetails;
}

export const getDateDay = (dateParam) => {
    var dayNames = [
        "Lun",
        "Mar",
        "Mer",
        "Jeu",
        "Ven",
        "Sam",
        "Dim",
    ];
    var date = new Date(dateParam);
    var dayname = dayNames[date.getDay()];
    return dayname;
}

export const getDateHours = (dateParam) => {
    var date = new Date(dateParam);
    var hours = date.getHours();
    return hours;
}