import { StyleSheet, Text, View, Button } from 'react-native'
import theme from '../styles/theme.style'

export type Props = {
  navigation: any;
};

export default function Aboutscreen ({ navigation }: Props) {
  return (
        <View style={styles.about}>
            <Text style={styles.white}>About screen</Text>
            <Text style={styles.white}>App made by Valentin Afonso</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
  )
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center'
  },
  white: {
    color: '#fff'
  }
})
