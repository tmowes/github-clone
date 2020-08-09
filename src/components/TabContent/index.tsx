import React from 'react'

import { Container, RepoIcon, Label, TotalRepos } from './styles'
import { TabContentProps } from './types'

const TabContent: React.FC<TabContentProps> = ({ public_repos }) => {
  return (
    <Container className="content">
      <RepoIcon />
      <Label>Repositories</Label>
      <TotalRepos>{public_repos}</TotalRepos>
    </Container>
  )
}

export default TabContent
