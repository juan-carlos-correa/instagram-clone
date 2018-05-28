import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Post = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Post</Text>
      <Button title="Comentarios" onPress={ () => navigation.navigate('Comments') }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Post
