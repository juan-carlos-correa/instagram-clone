import { createBottomTabNavigator } from 'react-navigation'
import Add from './Add'
import StackHome from './StackHome'
import Profile from './Profile'
import StackSearch from './StackSearch'
import StackFollow from './StackFollow'

const PrivateRoutes = createBottomTabNavigator({
  Home: { screen: StackHome },
  Search: { screen: StackSearch },
  Add: { screen: Add },
  Follow: { screen: StackFollow },
  Profiles: { screen: Profile }
})

export default PrivateRoutes
