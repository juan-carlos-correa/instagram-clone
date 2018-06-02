import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Follow = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Follow</Text>
      <Button title="Autor" onPress={() => navigation.navigate('Author') }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Follow
