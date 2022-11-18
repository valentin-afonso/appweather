import React, { useState, useCallback } from 'react';
import theme from '../styles/theme.style';
import { useQuery } from '@tanstack/react-query';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import * as api from '../api/citiesApi';

export default function DatasList({ navigation, valueInput }) {

    const { data, isLoading, isSuccess, isError } = useQuery(['weather'], api.getCities);

    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.list}>
            <Text style={styles.listTitle}>Trouvez une ville</Text>
            {isLoading &&
                <View style={styles.containerLoading}>
                    <Text value='chargement' style={styles.white}>chargement des villes ...</Text>
                </View>
            }
            {isError &&
                <View style={styles.containerError}>
                    <Text value='erreur' style={styles.white}>erreur</Text>
                </View>
            }
            {isSuccess &&
                <ScrollView
                    style={styles.scrollview}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor="#fff"
                        />
                    }
                >
                    {valueInput !== '' &&
                        data.map((city, id) => (
                            city.nom.indexOf(valueInput) !== -1 &&
                            <Text
                                style={styles.city}
                                key={id}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        cityname: city.nom,
                                        code: city.code,
                                        id: id,
                                    });
                                }}
                            >
                                {city.nom}
                            </Text>
                        ))
                    }
                    {valueInput === '' &&
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
        width: '95%',
        marginTop: 20,
    },
    scrollview: {
        width: '100%',
        borderRadius: 20,
    },
    listTitle: {
        textAlign: 'start',
        margin: 10,
        color: "#fff",
        width: '100%',
        fontSize: 30,
        paddingLeft: 10,
    },
    city: {
        padding: 20,
        backgroundColor: theme.SECONDARY_COLOR,
        color: '#fff',
        borderBottomWidth: 6,
        borderColor: '#fff',
        marginBottom: 1,
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
