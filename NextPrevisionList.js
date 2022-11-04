import React, { useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import NextPrevisionItem from './NextPrevisionItem';

export default function NextPrevisionList({ previsions, cityname, navigation }) {


    const [refreshing, setRefreshing] = useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.listNextPrevision}>
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
                    previsions.map((weather, id) => (

                        <NextPrevisionItem
                            style={styles.previsionComponent}
                            key={id}
                            weather={weather}
                            id={id}
                            cityname={cityname}
                            navigation={navigation}
                        />
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listNextPrevision: {
        width: '100%',
    },
    previsionComponent: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
    }
});
