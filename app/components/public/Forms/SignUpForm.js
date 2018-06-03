import React from 'react'
import { View, Button }  from 'react-native'
import { Field, reduxForm } from 'redux-form'
import MyField from '../../../Shared/MyField'
import PropTypes from 'prop-types'

const validate = (values) => {
  const errors = {}

  if (!values.username) {
    errors.username = 'required'
  } else if (values.username.length < 3 || values.username.length > 20) {
    errors.username = 'Username must be between 3 and 10 characters'
  }

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

  if (!values.repeatPassword) {
    errors.repeatPassword = 'required'
  } else if (values.password && values.password !== values.repeatPassword) {
    errors.repeatPassword = 'Passwords must match'
  }

  return errors
}

const SignUpForm = props => {
  return (
    <View>
      <Field
        name="username"
        component={MyField}
        placeholder="Username"
      />
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
      <Field
        secureTextEntry={true}
        name="repeatPassword"
        component={MyField}
        placeholder="Repeat password"
      />
      <Button title="SignUp" onPress={props.handleSubmit(values => console.log(values))} />
    </View>
  )
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'SignUpForm',
  validate
})(SignUpForm)
