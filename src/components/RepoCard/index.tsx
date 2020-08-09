import React from 'react'

import { Link } from 'react-router-dom'
import { RepoCardProps } from './types'
import {
  Container,
  TopSide,
  BottomSide,
  RepoIcon,
  StarIcon,
  ForkIcon,
} from './styles'

const RepoCard: React.FC<RepoCardProps> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other'
  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </TopSide>
      <BottomSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BottomSide>
    </Container>
  )
}

export default RepoCard
