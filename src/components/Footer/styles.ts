import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.4rem 3.2rem;
`
export const GithubLogo = styled(FaGithub)`
  margin: 2.4rem;

  fill: var(--border);
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`

export const Line = styled.span`
  display: flex;
  width: 200vw;
  border-top: 1px solid var(--border);
  margin-left: -50vw;
`
