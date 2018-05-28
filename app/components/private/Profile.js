import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Profiles = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Profiles</Text>
      <Button title="Post" onPress={ () => navigation.navigate('Post') }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Profiles
