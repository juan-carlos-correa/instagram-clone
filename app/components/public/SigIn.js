import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import SignForm from './Forms/SignIn'

const SignIn = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <SignForm />
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

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
