import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Search = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Search
