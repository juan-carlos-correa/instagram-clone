import React from 'react'
import { View, Text, TextInput }  from 'react-native'

const MyField = props => (
  <View>
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.keyboardType || 'default'}
      autoCapitalize={props.autoCapitalize || 'none'}
      secureTextEntry={props.secureTextEntry || false}
      onBlur={props.input.onBlur}
    />
    { props.meta.touched && props.meta.error && <Text>{props.meta.error }</Text> }
  </View>
)

export default MyField
