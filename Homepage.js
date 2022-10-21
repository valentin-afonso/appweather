import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import Logo from './assets/logo.png';
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
                <Text style={styles.white}>Entrez une ville</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Entrez une ville"
                    keyboardType="all"
                />
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
        width: '100%',
        padding: 10,
        backgroundColor: '#283747',
    },
    input: {
        padding: 20,
        fontSize: 16,
        marginTop: 10,
        backgroundColor: '#fff',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    white: {
        color: '#fff',
    }
});
