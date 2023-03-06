import { HTMLAttributes } from 'react'
import { Container } from './styles'
import { Link as LinkIcon } from '../../styles/icons'

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  text?: string
}

export function Link({ text = 'Link', ...rest }: Props) {
  return (
    <Container {...rest}>
      {text}
      <LinkIcon />
    </Container>
  )
}
