import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  Line,
} from './styles'
import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'
import TabContent from '../../components/TabContent'
import api from '../../services/api'
import { DataProps } from './types'

const Profile: React.FC = () => {
  const { username = 'tmowes' } = useParams()
  const [data, setData] = useState<DataProps>()

  useEffect(() => {
    async function loadData() {
      const userResponse = await api.get(`/users/${username}`)
      const repoResponse = await api.get(`/users/${username}/repos`)
      const shuffleRepos = repoResponse.data.sort(() => 0.5 - Math.random())
      const slicedRepos = shuffleRepos.slice(0, 8)
      setData({ user: userResponse.data, repos: slicedRepos })
    }
    loadData()
  }, [username])

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent public_repos={data.user.public_repos} />
        </div>
        <Line />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent public_repos={data.user.public_repos} />
            <Line />
          </Tab>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {data.repos.map(repoCard => (
                <RepoCard
                  key={repoCard.name}
                  username={repoCard.owner.login}
                  reponame={repoCard.name}
                  description={repoCard.description}
                  language={repoCard.language}
                  stars={repoCard.stargazers_count}
                  forks={repoCard.forks}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile
