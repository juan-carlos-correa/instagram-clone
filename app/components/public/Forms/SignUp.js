import React from 'react'
import { View, Text, StyleSheet, TextInput, Button }  from 'react-native'
import { Field, reduxForm } from 'redux-form'

const MyField = props => (
  <TextInput
    placeholder={props.placeholder}
    onChangeText={props.input.onChange}
    value={props.input.value}
    keyboardType={props.keyboardType || 'default'}
    autoCapitalize={props.autoCapitalize || 'none'}
    secureTextEntry={props.secureTextEntry || false}
  />
)

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

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm)
