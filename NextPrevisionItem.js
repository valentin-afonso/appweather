import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function NextPrevisionItem({ weather, navigation }) {

    return (
        <View style={styles.prevision}>
            <Text
                style={styles.white}
                onPress={() => {
                    navigation.navigate('DetailsHours', {
                        hourly: weather['hourly'],
                    });
                }}
            > {weather.date}</Text>
            <View style={styles.previsionCondition}>
                <Image
                    style={styles.icon}
                    source={{
                        uri: weather.icon
                    }}
                />
                <Text style={styles.white}> {weather.condition}</Text>
            </View>
            <Text style={styles.white}> Max {weather['temperature'].max}{weather['temperature'].unit} </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    prevision: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    previsionCondition: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
    },
    white: {
        color: 'white',
    }
});
