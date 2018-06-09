import React from 'react'
import { StyleSheet, View } from 'react-native'
import Auth from './app/Shared/Auth'
import { Provider } from 'react-redux'
import Store from './app/Store/Store'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Auth />
        </Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  }
})
