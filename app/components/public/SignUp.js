import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'

const SignUp = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>SignUp</Text>
      <Button title="SignIn" onPress={ () => navigation.goBack() } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default SignUp
