import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 18rem;
  background: ${(props) => props.theme.baseProfile};

  img {
    width: 9rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 4rem;
    cursor: pointer;
  }
`
