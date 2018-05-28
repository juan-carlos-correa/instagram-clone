import React from 'react'
import { createStackNavigator } from 'react-navigation'
import SigIn from './SigIn'
import SignUp from './SignUp'

const PublicRoutes = createStackNavigator({
  SignIn: { screen: SigIn },
  SignUp: { screen: SignUp }
})

export default PublicRoutes
