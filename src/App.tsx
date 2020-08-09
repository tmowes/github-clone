import 'react-calendar-heatmap/dist/styles.css'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeName, themes } from './styles/themes'

const App: React.FC = () => {
  const [themeName, setThemeName] = useState<ThemeName>('light')
  const currentTheme = themes[themeName]
  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Routes />
        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
