import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

export default function Aboutscreen({ navigation }) {

    return (
        <View style={styles.about}>
            <Text>About screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    about: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'start',
    }
});
