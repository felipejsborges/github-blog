import { Profile } from './Profile'
import { PostList } from './PostList'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <PostList />
    </Container>
  )
}
