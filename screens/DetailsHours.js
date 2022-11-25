import React, { useState, useCallback } from 'react'
import theme from '../styles/theme.style'
import { StyleSheet, Text, View, ScrollView, Image, RefreshControl } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import * as api from '../api/weatherApi'

export default function DetailsHours ({ route }) {
  const { id, cityname, date } = route.params
  const { data: hourly, isLoading, isSuccess, isError, error } = useQuery(['weatherDetails', id], () => api.getWeatherDetails(cityname, date))

  const [refreshing, setRefreshing] = useState(false)

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  return (
        <View style={styles.detailsHours}>
            {isLoading &&
                <View style={styles.containerLoading}>
                    <Text value='chargement' style={styles.white}>chargement des villes ...</Text>
                </View>
            }
            {isError &&
                <View style={styles.containerError}>
                    <Text value='erreur' style={styles.white}>erreur</Text>
                </View>
            }
            {isSuccess &&
                <ScrollView
                    style={styles.scrollview}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor="#fff"
                        />
                    }
                >
                    {
                        hourly.hourly.map((item, id) => (
                            <View
                                key={id}
                                style={styles.prevision}>

                                {api.getDateHours(item.datetime) < 10 &&
                                    <Text style={styles.white}>0{api.getDateHours(item.datetime)}:00</Text>
                                }
                                {api.getDateHours(item.datetime) >= 10 &&
                                    <Text style={styles.white}>{api.getDateHours(item.datetime)}:00</Text>
                                }
                                <View style={styles.previsionCondition}>
                                    <Image
                                        style={styles.icon}
                                        source={{
                                          uri: item.icon
                                        }}
                                    />
                                    <Text style={styles.white}> {item.condition}</Text>
                                </View>
                                <Text style={styles.white}> {item.temperature.value} {item.temperature.unit}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            }

        </View>
  )
}

const styles = StyleSheet.create({
  detailsHours: {
    backgroundColor: theme.PRIMARY_COLOR
  },
  prevision: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  previsionCondition: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 50,
    height: 50
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
