import { StyleSheet, Text, View, Button } from 'react-native'
import * as api from '../api/citiesApi'
import { useQuery } from '@tanstack/react-query'
import Weather from '../components/Weather'
import theme from '../styles/theme.style'

export default function DetailsCity ({ route, navigation }) {
  const { cityname, code, id } = route.params

  const { data: city, isLoading, isError } = useQuery(['cities', id], () => api.getCity(code))

  return (
        <View style={styles.detailsCity}>

            {isLoading &&
                <View style={styles.containerLoading}>
                    <Text value='chargement' style={styles.white}>chargement des détails...</Text>
                </View>
            }
            {isError &&
                <View style={styles.containerError}>
                    <Text value='erreur' style={styles.white}>erreur</Text>
                </View>
            }
            <Weather
                cityname={cityname}
                id={id}
                navigation={navigation} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
  )
}

const styles = StyleSheet.create({
  detailsCity: {
    flex: 1,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'start'
  },
  containerDetails: {
    padding: 10,
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  white: {
    color: '#fff'
  },
  containerLoading: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerError: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
