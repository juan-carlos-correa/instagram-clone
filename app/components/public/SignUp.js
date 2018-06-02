import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import SignUpForm from './Forms/SignUp'
import { connect } from 'react-redux'

const SignUp = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>SignUp</Text>
      <SignUpForm />
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

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
