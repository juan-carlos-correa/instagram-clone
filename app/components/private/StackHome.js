import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import Comments from './Comments'
import Author from './Profile'
import Post from './Post'

const StackHome = createStackNavigator({
  Home: {
    screen: Home
  },
  Author: {
    screen: Author
  },
  Post: {
    screen: Post
  },
  Comments: {
    screen: Comments
  }
})

export default StackHome