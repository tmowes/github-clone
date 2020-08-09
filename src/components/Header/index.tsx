import React from 'react'

import { Container, GithubLogo, SearchForm, Input } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <Input />
      </SearchForm>
    </Container>
  )
}

export default Header
