import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from '../styles/theme.style'
import HomeStack from './HomeStack'
import AboutStack from './AboutStack'

const Tab = createBottomTabNavigator()

export default function BottomBar () {
  return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: theme.ICON_COLOR_ACTIVE,
              tabBarInactiveTintColor: theme.ICON_COLOR_DEFAULT,
              tabBarStyle: { backgroundColor: theme.BG_BOTTOM_BAR, borderTopColor: theme.PRIMARY_COLOR },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName

                if (route.name === 'HomeStack') {
                  iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline'
                } else if (route.name === 'AboutStack') {
                  iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                }
                return <Ionicons name={iconName} size={size} color={color} />
              }
            })}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                  title: 'Accueil'
                }} />
            <Tab.Screen
                name="AboutStack"
                component={AboutStack}
                options={{
                  title: 'About'
                }} />
        </Tab.Navigator>
  )
}
