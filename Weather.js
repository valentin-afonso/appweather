
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import theme from './styles/theme.style';
import * as api from './api/weatherApi';
import { useQuery } from '@tanstack/react-query';
import NextPrevisionList from './NextPrevisionList';

export default function Weather({ cityname, id, navigation }) {


    const { data: weather, isLoading, isSuccess, isError, refetch, error } = useQuery(['weather', id], () => api.getWeather(cityname));

    return (
        <View style={styles.weather}>
            {isLoading &&
                <View style={styles.containerLoading}>
                    <Text value='chargement' style={styles.white}>chargement de la météo...</Text>
                </View>
            }
            {isError &&
                <View style={styles.containerError}>
                    <Text value='erreur' style={styles.white}>Données indisponnible pour cette ville</Text>
                    <Button
                        style={styles.buttonRefresh}
                        title="Try again"
                        color="#fff"
                        onPress={() => refetch()}
                    />
                </View>
            }
            {isSuccess &&
                <View style={styles.containerInfoWeather}>
                    <View style={styles.infoWeather}>
                        <View style={styles.containerCurrentWeather}>
                            <View style={styles.currentWeatherTop}>
                                <View>
                                    <Text style={styles.currentWeatherTopText}>Actuellement</Text>
                                    <Text style={styles.currentWeatherTopTextTmp}>{weather["currentConditions"]['temperature'].value} {weather["currentConditions"]['temperature'].unit}</Text>
                                </View>
                                <Image
                                    style={styles.icon}
                                    source={{
                                        uri: weather['currentConditions'].icon
                                    }}
                                />
                            </View>
                            <View style={styles.containerInfo}>
                                <View style={styles.info}>
                                    <Text style={styles.infoValue}>{weather["currentConditions"]['windSpeed'].value} km/h</Text>
                                    <Text style={styles.white}>Vent</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text style={styles.infoValue}>{weather["currentConditions"]['humidity'].value} %</Text>
                                    <Text style={styles.white}>Humidité</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text style={styles.infoValue}>XX %</Text>
                                    <Text style={styles.white}>Pluie</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text style={styles.infoValue}>XX %</Text>
                                    <Text style={styles.white}>UV</Text>
                                </View>
                            </View>
                        </View>
                        <NextPrevisionList
                            previsions={weather["next5DaysConditions"]}
                            cityname={cityname}
                            navigation={navigation}
                        />
                    </View>
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
        width: '100%',
        marginTop: 0,
    },
    containerInfoWeather: {
        width: '100%',
    },
    containerCurrentWeather: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: theme.SECONDARY_COLOR,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    currentWeatherTop: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    currentWeatherTopText: {
        fontSize: 18,
        color: '#fff',
    },
    currentWeatherTopTextTmp: {
        fontSize: 55,
        color: '#fff',
    },
    infoWeather: {
        display: 'flex',
        height: '100%',
        backgroundColor: theme.PRIMARY_COLOR,
        alignItems: 'start',
        justifyContent: 'start',
    },
    icon: {
        width: 100,
        height: 100,
        marginRight: 25,
    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    info: {
        alignItems: 'center',
    },
    infoValue: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    white: {
        color: '#fff',
    },
    containerLoading: {
        backgroundColor: theme.PRIMARY_COLOR,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerError: {
        backgroundColor: theme.PRIMARY_COLOR,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
