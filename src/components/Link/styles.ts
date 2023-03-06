import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};
  border: 1px solid transparent;
  width: fit-content;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
