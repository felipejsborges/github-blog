import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme.baseProfile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    height: 9rem;
    width: 9rem;
    border-radius: 8px;
  }
`

export const Details = styled.div`
  header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${(props) => props.theme.baseTitle};
    }
  }

  main {
    margin-top: 0.5rem;
  }

  footer {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
  }
`

export const FooterItem = styled.div`
  & + & {
    margin-left: 1.5rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.baseLabel};
  }

  span {
    margin-left: 0.5rem;
    color: ${(props) => props.theme.baseSubtitle};
  }
`
