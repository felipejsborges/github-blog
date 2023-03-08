import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4.5rem;
`

export const Intro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  strong {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;
    color: ${(props) => props.theme.baseSubtitle};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme.baseSpan};
  }
`

export const List = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  list-style: none;
`
