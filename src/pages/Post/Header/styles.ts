import styled from 'styled-components'

export const Container = styled.header`
  background: ${(props) => props.theme.baseProfile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > a {
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
    }
  }

  main {
    margin-top: 1.25rem;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseTitle};
  }

  footer {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`

export const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${(props) => props.theme.baseLabel};
  }

  span {
    color: ${(props) => props.theme.baseSpan};
    line-height: 100%;
  }
`
