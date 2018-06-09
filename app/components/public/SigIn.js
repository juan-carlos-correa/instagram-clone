import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import SignForm from './Forms/SignInForm'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { fetchSignInWithEmailAndPassword } from '../../Actions/Auth'

class SignIn extends React.Component {
  signIn = values => this.props.actions.fetchSignInWithEmailAndPassword(values)

  render () {
    const { navigation } = this.props

    return (
      <View style={ styles.container }>
        <SignForm signIn={this.signIn} />
        <View style={{ marginTop: 16 }}>
          <Button
            title="SignUp"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    )
  }
}

SignIn.propTypes = {
  navigation: PropTypes.object,
  actions: PropTypes.object
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
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchSignInWithEmailAndPassword: bindActionCreators(fetchSignInWithEmailAndPassword, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
