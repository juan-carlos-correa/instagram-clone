import React from 'react'
import { View, Text, TextInput, StyleSheet }  from 'react-native'
import PropTypes from 'prop-types'

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

MyField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  meta: PropTypes.object.isRequired
}

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
