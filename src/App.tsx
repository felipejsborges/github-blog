import { ThemeProvider } from 'styled-components'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { Link } from './components/Link'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Link />
      <Input />
      <Card />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
