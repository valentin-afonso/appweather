import { useQuery } from '@tanstack/react-query';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as api from './api/citiesApi';

export default function DatasList({ setCityId, navigation }) {

    const { data, isLoading, isSuccess, isError } = useQuery(['cities'], api.getCities);

    return (
        <View style={styles.list}>
            <Text style={styles.listTitle}>List datas</Text>
            {isLoading && <Text value='chargement'>chargement des villes ...</Text>}
            {isError && <Text value='erreur'>erreur</Text>}
            {isSuccess &&
                <ScrollView style={styles.scrollview}>
                    {

                        data.map((city, id) => (
                            <Text
                                style={styles.city}
                                key={id}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        cityname: city.nom,
                                        code: city.code,
                                        id: id,
                                    });
                                    // setCityId(id);
                                }}
                            >
                                {city.nom}
                            </Text>
                        ))
                    }
                </ScrollView>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        alignItems: 'center',
        backgroundColor: "#fff",
        width: '100%',
    },
    scrollview: {
        width: '100%',
    },
    listTitle: {
        textAlign: 'center',
        margin: 10,
    },
    city: {
        padding: 20,
        margin: 2,
        backgroundColor: "#E3E3E3",
        border: "10px solid black",
    }
});
