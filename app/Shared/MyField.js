import React from 'react'
import { View, Text, TextInput, StyleSheet }  from 'react-native'

const MyField = props => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.keyboardType || 'default'}
      autoCapitalize={props.autoCapitalize || 'none'}
      secureTextEntry={props.secureTextEntry || false}
      onBlur={props.input.onBlur}
    />
    {
      props.meta.touched && props.meta.error && (
        <Text style={styles.error}>{props.meta.error }</Text>
      )
    }
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  input: {
    paddingVertical: 8
  },
  error: {
    color: '#dd0000'
  }
})

export default MyField
