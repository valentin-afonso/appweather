import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Aboutscreen from '../screens/Aboutscreen'

const Stack = createNativeStackNavigator()

function AboutStack () {
  return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={Aboutscreen}
                options={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: '#17202A'
                  },
                  headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
  )
}

export default AboutStack
