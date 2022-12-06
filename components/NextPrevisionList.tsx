import React, { useState, useCallback } from 'react'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import NextPrevisionItem from './NextPrevisionItem'

export type Props = {
  previsions: any;
  cityname: any;
  navigation: any;
};

export default function NextPrevisionList ({ previsions, cityname, navigation }: Props) {
  const [refreshing, setRefreshing] = useState(false)
  const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  return (
        <View style={styles.listNextPrevision}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="#fff"
                    />
                }
            >

                {
                    previsions.map((weather: any, id: any) => (
                        <NextPrevisionItem
                            key={id}
                            weather={weather}
                            id={id}
                            cityname={cityname}
                            navigation={navigation}
                        />
                    ))
                }
            </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({
  listNextPrevision: {
    width: '100%'
  },
  previsionComponent: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red'
  }
})
