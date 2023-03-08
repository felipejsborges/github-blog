import { Card } from '../../../components/Card'
import { Input } from '../../../components/Input'
import { Container, Intro, List } from './styles'

export function PostList() {
  return (
    <Container>
      <Intro>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </Intro>
      <Input />
      <List>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List>
    </Container>
  )
}
