import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Home = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Home</Text>
      <Button title="Autor" onPress={ () => navigation.navigate('Author') }/>
      <Button title="Comentarios" onPress={ () => navigation.navigate('Comments') }/>
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Home
