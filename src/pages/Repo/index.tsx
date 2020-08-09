import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import {
  Container,
  Breadcrumb,
  Username,
  Reponame,
  Stats,
  LinkButton,
} from './styles'
import { StarIcon, RepoIcon, ForkIcon } from '../../components/RepoCard/styles'
import { GithubIcon } from '../../components/Header/styles'
import { DataProps } from './types'
import api from '../../services/api'

const Repo: React.FC = () => {
  const { username, reponame } = useParams()
  const [data, setData] = useState<DataProps>()

  useEffect(() => {
    async function loadRepoData() {
      const response = await api.get(`/repos/${username}/${reponame}`)

      setData({ repo: response.data })
    }
    loadRepoData()
  }, [reponame, username])

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.repo) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Username to={`/${username}`}>{username}</Username>
        <span>/</span>
        <Reponame to={`/${username}/${reponame}`}>{reponame}</Reponame>
      </Breadcrumb>
      <p>{data.repo.description}</p>
      <Stats>
        <li>
          <StarIcon />
          <b>{data.repo.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data.repo.forks}</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton href={data.repo.html_url}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  )
}

export default Repo
