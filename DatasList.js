import React, { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import * as api from './api/citiesApi';

export default function DatasList({ setCityId, navigation }) {

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
            {isLoading && <Text value='chargement' style={styles.white}>chargement des villes ...</Text>}
            {isError && <Text value='erreur' style={styles.white}>erreur</Text>}
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
        backgroundColor: '#17202A',
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
        backgroundColor: '#283747',
        color: '#fff',
        borderBottomWidth: 6,
        borderColor: '#fff',
        marginBottom: 1,
    },
    white: {
        color: '#fff',
    }
});
