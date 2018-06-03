import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import SignUpForm from './Forms/SignUpForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const SignUp = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>SignUp</Text>
      <SignUpForm />
      <View style={{ marginTop: 16 }}>
        <Button
          title="SignIn"
          onPress={ () => navigation.goBack() }
        />
      </View>
    </View>
  )
}

SignUp.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
