import { createStackNavigator } from 'react-navigation'
import Comments from './Comments'
import Author from './Profile'
import Post from './Post'
import Search from './Search'

const StackSearch = createStackNavigator({
  Search: {
    screen: Search
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

export default StackSearch