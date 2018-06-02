import { createStackNavigator } from 'react-navigation'
import Comments from './Comments'
import Author from './Profile'
import Post from './Post'
import TabFollow from './TabFollow'

const StackFollow = createStackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: {
      header: null
    }
  },
  Post: {
    screen: Post
  },
  Author: {
    screen: Author
  },
  Comments: {
    screen: Comments
  }
})

export default StackFollow