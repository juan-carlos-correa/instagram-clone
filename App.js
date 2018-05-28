import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PublicRoutes from './app/components/public/PublicRoutes'
import PrivateRoutes from './app/components/private/PrivateRoutes'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PrivateRoutes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
