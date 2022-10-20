

export const getCities = async () => {
    const response = await fetch('https://geo.api.gouv.fr/communes');
    const cities = await response.json();
    // Fichier json trop long ...
    cities.length = 100;
    return cities;
}

export const getCity = async (code) => {
    const response = await fetch(`https://geo.api.gouv.fr/communes/${code}`);
    const city = await response.json();
    return city;
}