import React from 'react'
import { View, Button }  from 'react-native'
import { Field, reduxForm } from 'redux-form'
import MyField from '../../../Shared/MyField'
import PropTypes from 'prop-types'

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'required'
  } else if (! /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(values.email)) {
    errors.email = 'Invalid email'
  }

  if (!values.password) {
    errors.password = 'required'
  } else if (values.password.length < 5) {
    errors.password = 'Password must be at least 5 characters'
  }

  return errors
}

const SignInForm = props => {
  return (
    <View>
      <Field
        keyboardType='email-address'
        name="email"
        component={MyField}
        placeholder="Email"
      />
      <Field
        secureTextEntry={true}
        name="password"
        component={MyField}
        placeholder="Password"
      />
      <Button title="Login" onPress={props.handleSubmit(props.signIn)} />
    </View>
  )
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  signIn: PropTypes.func
}

export default reduxForm({
  form: 'SignInForm',
  validate
})(SignInForm)
