import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import SignUpForm from './Forms/SignUpForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { fetchSignUpWithEmailAndPassword } from '../../Actions/Auth'

class SignUp extends React.Component {
  register = values => this.props.actions.fetchSignUpWithEmailAndPassword(values)

  render () {
    const { navigation } = this.props

    return (
      <View style={ styles.container }>
        <Text>SignUp</Text>
        <SignUpForm register={this.register}/>
        <View style={{ marginTop: 16 }}>
          <Button
            title="SignIn"
            onPress={ () => navigation.goBack() }
          />
        </View>
      </View>
    )
  }
}

SignUp.propTypes = {
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
      fetchSignUpWithEmailAndPassword: bindActionCreators(fetchSignUpWithEmailAndPassword, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
