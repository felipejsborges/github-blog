import styled from 'styled-components'

export const Container = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 0.5rem;
  width: 100%;
  height: 3.125rem;
  background: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseBorder};
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }
`
