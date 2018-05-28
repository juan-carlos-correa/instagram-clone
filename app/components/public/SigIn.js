import React from 'react'
import { Text, View, Button } from 'react-native'

const SignIn = props => {
  const { navigation } = props

  return (
    <View>
      <Text>SignIn</Text>
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')}/>
    </View>
  )
}

export default SignIn
