import React from 'react'
import { View, Text, StyleSheet, TextInput, Button }  from 'react-native'
import { Field, reduxForm } from 'redux-form'

const MyField = (props) => (
  <TextInput
    placeholder="Username"
    onChangeText={props.input.onChange}
    value={props.input.value}
  />
)

const SignUpForm = props => {
  return (
    <View>
      <Field name="username" component={MyField} />
      <Field name="email" component={MyField} />
      <Button title="SignUp" onPress={props.handleSubmit(values => console.log(values))} />
    </View>
  )
}

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm)
