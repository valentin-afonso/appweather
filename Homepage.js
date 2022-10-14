import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import Logo from './assets/logo.png';
import { useQueryClient, useQuery } from '@tanstack/react-query';

export default function Homescreen({ navigation }) {
    const [text, setText] = useState('');

    const queryClient = useQueryClient();
    //const query = useQuery(['todos'], getTodos);

    return (
        <View style={styles.home}>
            <Image
                style={styles.logo}
                source={Logo}
            />
            <Text>Entrez du text</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="useless placeholder"
                keyboardType="all"
            />
            <Button
                title="Go to About page"
                onPress={() => navigation.navigate('About')}
            />
            <ScrollView>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'start',
    },
    logo: {
        width: 50,
        height: 50,
    }
});
