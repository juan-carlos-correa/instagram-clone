import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { checkAuthState } from '../Actions/Auth'
import PublicRoutes from '../components/public/PublicRoutes'
import PrivateRoutes from '../components/private/PrivateRoutes'

class Auth extends React.Component {
  componentDidMount () {
    this.props.actions.checkAuthState()
  }

  render () {
    return (
      <View style={ styles.container }>
        {this.props.auth.user ? <PrivateRoutes /> : <PublicRoutes />}
      </View>
    )
  }
}

Auth.propTypes = {
  actions: PropTypes.object,
  auth: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
      checkAuthState: bindActionCreators(checkAuthState, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
