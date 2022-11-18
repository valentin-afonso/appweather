import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as api from '../api/weatherApi';

export default function NextPrevisionItem({ weather, id, cityname, navigation }) {

    return (
        <TouchableOpacity
            style={styles.prevision}
            onPress={() => {
                navigation.navigate('DetailsHours', {
                    id: id,
                    /*hourly: weather['hourly'],*/
                    cityname: cityname,
                    date: weather.date
                });
            }}>
            <Text style={styles.white}>{api.getDateDay(weather.date)}</Text>
            <View style={styles.previsionCondition}>
                <Image
                    style={styles.icon}
                    source={{
                        uri: weather.icon
                    }}
                />
                <Text style={styles.white}> {weather.condition}</Text>
            </View>
            <Text style={styles.white}> max {weather['temperature'].max}{weather['temperature'].unit} </Text>
        </TouchableOpacity>

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
