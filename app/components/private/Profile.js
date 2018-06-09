import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signOut } from '../../Actions/Auth'

const Profiles = props => {
  const { navigation } = props

  return (
    <View style={ styles.container }>
      <Text>Profiles</Text>
      <Button title="Post" onPress={ () => navigation.navigate('Post') }/>
      <Button title="Logout" onPress={ () => props.actions.signOut() }/>
    </View>
  )
}

Profiles.propTypes = {
  navigation: PropTypes.object,
  actions: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
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
      signOut: bindActionCreators(signOut, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles)