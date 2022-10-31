import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Logo from './assets/logo.png';
import Search from './assets/icon-search.png';
import DatasList from './DatasList';


export default function Homescreen({ navigation }) {
    const [text, setText] = useState('');

    return (
        <View style={styles.home}>
            <View style={styles.homeHeader}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <Text style={styles.white}>Weather App</Text>
            </View>
            {/*
                <Button
                style={styles.buttonAbout}
                title="Go to About page"
                onPress={() => navigation.navigate('About')}
                />
            */}
            <View style={styles.homeForm}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Entrez une ville"
                    placeholderTextColor="#fff"
                    keyboardType="all"
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Details', {
                            cityname: { text },
                        });
                    }}
                >
                    <Image
                        style={styles.search}
                        source={Search}
                    />
                </TouchableOpacity>
            </View>
            <DatasList
                navigation={navigation}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#17202A',
        alignItems: 'center',
    },
    homeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        position: 'relative',
    },
    homeForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#283747',
        borderRadius: 50,
        height: 60,
        width: '80%',
    },
    input: {
        padding: 20,
        fontSize: 16,
        borderRadius: 50,
        width: '80%',
        color: '#fff',
        backgroundColor: '#283747',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    search: {
        width: 30,
        height: 30,
    },
    white: {
        color: '#fff',
    }
});
