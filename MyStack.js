import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homepage';
import Aboutscreen from './Aboutscreen';
import DetailsCity from './DetailsCity';
import DetailsHours from './DetailsHours';

const Stack = createNativeStackNavigator();


export default function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Homescreen} />
            <Stack.Screen name="About" component={Aboutscreen} />
            <Stack.Screen name="Details" component={DetailsCity} />
            <Stack.Screen name="DetailsHours" component={DetailsHours} />
        </Stack.Navigator>
    );
}
