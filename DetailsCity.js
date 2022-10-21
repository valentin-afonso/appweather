import { StyleSheet, Text, View, Button } from 'react-native';
import * as api from './api/citiesApi';
import { useQuery } from '@tanstack/react-query';
import Weather from './Weather';

export default function DetailsCity({ route, navigation }) {

    const { cityname, code, id } = route.params;

    const { data: city, isLoading, isSuccess, isError } = useQuery(['cities', id], () => api.getCity(code));

    return (
        <View style={styles.detailsCity}>

            {isLoading && <Text value='chargement' style={styles.white}>chargement des détails...</Text>}
            {isError && <Text value='erreur' style={styles.white}>erreur</Text>}
            {/*
            isSuccess &&
                <View style={styles.containerDetails} >
                    <Text style={styles.title}>Détails de la ville : </Text>
                    <Text>{city.nom} / {city.code}</Text>
                    <Text>N° département {city.codeDepartement}</Text>
                    <Text>Code Postale : {city.codesPostaux[0]}</Text>
                    <Text>Population : {city.population} habitants</Text>
                </View>

    */}
            <Weather
                cityname={cityname}
                id={id}
                navigation={navigation} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    detailsCity: {
        flex: 1,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'start',
    },
    containerDetails: {
        padding: 10,
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    white: {
        color: '#fff',
    }
});
