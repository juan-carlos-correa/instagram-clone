import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import SignUpForm from './Forms/SignUpForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { fetchSignUpWithEmailAndPassword } from '../../Actions/Auth'
import { clearImageSignUp, loadImageSignUp } from '../../Actions/ImageSignUp'
import ImagePickerComponent from '../../Shared/ImagePicker'

class SignUp extends React.Component {
  register = values => this.props.actions.fetchSignUpWithEmailAndPassword(values)

  componentWillUnmount () {
    this.props.actions.clearImageSignUp()
  }

  render () {
    const { navigation } = this.props

    return (
      <View style={ styles.container }>
        <Text>SignUp</Text>
        <ImagePickerComponent
          image={this.props.imageSignUp.image}
          loadImageSignUp={this.props.actions.loadImageSignUp}
        />
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
  actions: PropTypes.object,
  imageSignUp: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 16
  }
})

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    imageSignUp: state.imageSignUp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchSignUpWithEmailAndPassword: bindActionCreators(fetchSignUpWithEmailAndPassword, dispatch),
      loadImageSignUp: bindActionCreators(loadImageSignUp, dispatch),
      clearImageSignUp: bindActionCreators(clearImageSignUp, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
