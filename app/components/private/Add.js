import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Add = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Add</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Add
