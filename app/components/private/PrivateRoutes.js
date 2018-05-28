import { createBottomTabNavigator } from 'react-navigation'
import Add from './Add'
import Follow from './Follow'
import Home from './Home'
import Profiles from './Profiles'
import Search from './Search'

const PrivateRoutes = createBottomTabNavigator({
  Home: { screen: Home },
  Search: { screen: Search },
  Add: { screen: Add },
  Follow: { screen: Follow },
  Profiles: { screen: Profiles }
})

export default PrivateRoutes
