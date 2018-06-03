import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class Comments extends React.Component {
  render () {
    const { navigation } = this.props

    return (
      <View style={ styles.container }>
        <Text>Comments</Text>
        <Button title="Autor" onPress={ () => navigation.navigate('Author') }/>
      </View>
    )
  }
}

Comments.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Comments
