import { StyleSheet, View, ScrollView } from 'react-native';
import NextPrevisionItem from './NextPrevisionItem';

export default function NextPrevisionList({ previsions, navigation }) {

    return (
        <View style={styles.listNextPrevision}>
            <ScrollView style={styles.scrollview}>
                {
                    previsions.map((weather, id) => (

                        <NextPrevisionItem
                            style={styles.previsionComponent}
                            key={id}
                            weather={weather}
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
