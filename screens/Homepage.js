import React, { useState } from 'react';
import theme from '../styles/theme.style';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../assets/logo.png';
import Search from '../assets/icon-search.png';
import DatasList from '../components/DatasList';


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
                            id: Math.floor(Math.random()),
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
                valueInput={text}
            />
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: theme.PRIMARY_COLOR,
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
        backgroundColor: theme.SECONDARY_COLOR,
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
