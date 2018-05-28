import { createBottomTabNavigator } from 'react-navigation'
import Add from './Add'
import Follow from './Follow'
import StackHome from './StackHome'
import Profile from './Profile'
import Search from './Search'

const PrivateRoutes = createBottomTabNavigator({
  Home: { screen: StackHome },
  Search: { screen: Search },
  Add: { screen: Add },
  Follow: { screen: Follow },
  Profiles: { screen: Profile }
})

export default PrivateRoutes
