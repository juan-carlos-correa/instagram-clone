import { createBottomTabNavigator } from 'react-navigation'
import Add from './Add'
import Follow from './Follow'
import StackHome from './StackHome'
import Profile from './Profile'
import StackSearch from './StackSearch'

const PrivateRoutes = createBottomTabNavigator({
  Home: { screen: StackHome },
  Search: { screen: StackSearch },
  Add: { screen: Add },
  Follow: { screen: Follow },
  Profiles: { screen: Profile }
})

export default PrivateRoutes
