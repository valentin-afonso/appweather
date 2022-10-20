
import { StyleSheet, Text, View, Image } from 'react-native';
import * as api from './api/weatherApi';
import { useQuery } from '@tanstack/react-query';

export default function DetailsCity({ cityname, id }) {


    const { data: weather, isLoading, isSuccess, isError, status } = useQuery(['weather', id], () => api.getWeather(cityname));

    return (
        <View style={styles.weather}>
            <Text style={styles.weatherTitle}>Info Météo</Text>
            {isLoading && <Text value='chargement'>chargement de la météo...</Text>}
            {isError && <Text value='erreur'>erreur</Text>}
            {isSuccess &&
                <View style={styles.containerInfoWeather}>
                    {typeof (weather["errors"]) !== "undefined" &&

                        <View style={styles.infoWeather}>
                            <Text>Données indisponnible pour cette ville</Text>
                        </View>
                    }
                    {typeof (weather["errors"]) === "undefined" &&
                        <View style={styles.infoWeather}>
                            <Text>{weather["current_condition"].condition}</Text>
                            {/*
                                <Image
                                    style={styles.icon}
                                    source={weather["current_condition"].icon}
                                />
                            */}

                        </View>
                    }
                </View>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    weather: {
        color: 'black',
        alignItems: 'start',
        justifyContent: 'start',
        backgroundColor: '#fff',
        width: '90%',
        marginTop: 10,
    },
    weatherTitle: {
        backgroundColor: 'black',
        width: '100%',
        textAlign: 'center',
        padding: 10,
        color: '#fff',
    },
    containerInfoWeather: {
        width: '100%',
        height: 200,
    },
    infoWeather: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 50,
        height: 50,
    }
});
