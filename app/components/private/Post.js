import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Post = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Post</Text>
      <Button title="Autor" onPress={ () => navigation.navigate('Author') }/>
      <Button title="Comentarios" onPress={ () => navigation.navigate('Comments') }/>
    </View>
  )
}

Post.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Post
