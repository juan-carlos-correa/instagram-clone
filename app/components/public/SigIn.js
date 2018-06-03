import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import SignForm from './Forms/SignInForm'
import PropTypes from 'prop-types'

const SignIn = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <SignForm />
      <View style={{ marginTop: 16 }}>
        <Button
          title="SignUp"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  }
})

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
