import { HTMLAttributes } from 'react'
import { Container } from './styles'

interface Props extends HTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: Props) {
  return <Container {...rest}></Container>
}
