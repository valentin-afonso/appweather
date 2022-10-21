import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function DetailsHours({ route }) {

    const { hourly } = route.params;

    return (
        <View style={styles.detailsHours}>
            <ScrollView style={styles.scrollview}>
                {
                    hourly.map((item, id) => (
                        <View
                            key={id}
                            style={styles.prevision}>
                            <Text style={styles.white}>{item.datetime}</Text>
                            <View style={styles.previsionCondition}>
                                <Image
                                    style={styles.icon}
                                    source={{
                                        uri: item.icon
                                    }}
                                />
                                <Text style={styles.white}> {item.condition}</Text>
                            </View>
                            <Text style={styles.white}> {item['temperature'].value} {item['temperature'].unit}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsHours: {
        backgroundColor: '#17202A',
    },
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
        color: '#fff',
    }
});
