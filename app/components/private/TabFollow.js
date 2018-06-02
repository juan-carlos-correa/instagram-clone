import { createMaterialTopTabNavigator } from 'react-navigation'
import Follow from './Follow'

const TabFollow = createMaterialTopTabNavigator({
  Follow: {
    screen: Follow
  },
  Followers: {
    screen: Follow
  }
}, {
  tabBarOptions: {
    style: {
      paddingTop: 15
    }
  }
})

export default TabFollow
