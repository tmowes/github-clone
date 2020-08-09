import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import Header from './components/Header'

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes />
    {/* <Footer /> */}
    <GlobalStyles />
  </BrowserRouter>
)

export default App
