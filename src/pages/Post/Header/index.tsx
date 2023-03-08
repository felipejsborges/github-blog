import { Container, FooterItem } from './styles'
import {
  ChevronLeft,
  Github,
  CalendarDay,
  Comment,
} from '../../../styles/icons'
import { Link } from '../../../components/Link'

export function Header() {
  return (
    <Container>
      <header>
        <a>
          <ChevronLeft />
          Voltar
        </a>
        <Link text="Ver no GitHub" />
      </header>
      <main>JavaScript data types and data structures</main>
      <footer>
        <FooterItem>
          <Github />
          <span>cameronwl</span>
        </FooterItem>
        <FooterItem>
          <CalendarDay />
          <span>Há 1 dia</span>
        </FooterItem>
        <FooterItem>
          <Comment />
          <span>5 comentários</span>
        </FooterItem>
      </footer>
    </Container>
  )
}
