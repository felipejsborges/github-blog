import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Container } from './styles'

export function CommonLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
