import React from 'react'

import { Container, Main, LeftSide, RightSide } from './styles'
import ProfileData from '../../components/ProfileData'

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username="tmowes"
            name="Julius Mowes"
            avatarUrl="https://github.com/tmowes.png"
            followers={887}
            following={69}
            company="PikTew"
            location="Timbó,SC Brazil"
            email="t-mowes@hotmail.com"
            blog="https://www.linkedin.com/in/julio-cesar-mowes/"
          />
        </LeftSide>
        <RightSide>
          <h1>RightSide</h1>
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile
