import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, GithubLogo, SearchForm, Input } from './styles'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({ themeName, setThemeName }) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    navigate(`/${search.toLowerCase().trim()}`)
  }

  function toggleTheme() {
    setThemeName(themeName === 'dark' ? 'light' : 'dark')
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <Input value={search} onChange={e => setSearch(e.target.value)} />
      </SearchForm>
    </Container>
  )
}

export default Header
