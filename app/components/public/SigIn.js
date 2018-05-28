import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const SignIn = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>SignIn</Text>
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default SignIn
