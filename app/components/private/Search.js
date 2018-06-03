import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Search = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Search</Text>
      <Button title="Post" onPress={ () => navigation.navigate('Post') } />
    </View>
  )
}

Search.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Search
