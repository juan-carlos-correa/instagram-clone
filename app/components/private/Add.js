import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Add = () => {
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
