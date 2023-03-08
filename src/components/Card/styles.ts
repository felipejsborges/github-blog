import styled from 'styled-components'

export const Container = styled.div`
  height: 17rem;
  background: ${(props) => props.theme.basePost};
  border-radius: 10px;
  padding: 2rem;
  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme.baseLabel};
  }

  header {
    height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme.baseTitle};
    }

    span {
      min-width: 3rem;
      text-align: right;
      margin-left: 1rem;
      font-size: 0.675rem;
      color: ${(props) => props.theme.baseSpan};
    }
  }

  main {
    margin-top: 1.25rem;
    height: 7rem;
    overflow: hidden;
  }
`
