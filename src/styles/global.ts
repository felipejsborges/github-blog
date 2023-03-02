import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:focus {
	outline: none;
}

body {
	background: ${(props) => props.theme.baseBackground};
  color: ${(props) => props.theme.baseText};
	-webkit-font-smoothing: antialiased;
}

body, input, textarea, span, button, label {
	font-family: 'Nunito', sans-serif;
	font-weight: normal;
	font-size: 1rem;
	line-height: 160%;
  color: ${(props) => props.theme.baseText};
}

button, a {
	outline: none;
  border: none;
	cursor: pointer;

	transition: all 200ms;

	&:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

@media (max-width: 1000px) {
	body, input, textarea, span, button {
		font-size: 87.5%;
	}
}
`
