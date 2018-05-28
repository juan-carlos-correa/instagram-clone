import React from 'react'
import { Text, Button, View } from 'react-native'

const SignUp = props => {
  const { navigation } = props

  return (
    <View>
      <Text>SignUp</Text>
      <Button title="SignIn" onPress={ () => navigation.goBack() } />
    </View>
  )
}

export default SignUp
