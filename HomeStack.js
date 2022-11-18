import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./Homepage";
import DetailsCity from './DetailsCity';
import DetailsHours from './DetailsHours';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Homescreen}
                options={{
                    title: 'Weather App',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#17202A',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsCity}
                options={{
                    title: 'Details',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#17202A',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="DetailsHours"
                component={DetailsHours}
                options={{
                    title: 'Détails',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#17202A',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;