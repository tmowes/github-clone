import styled, { css } from 'styled-components'
import { RiBookMarkLine } from 'react-icons/ri'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: min-content;
  padding: 1.6rem;
  border-bottom: 2px solid var(--orange);
`

export const Label = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0 0.6rem;
`

export const TotalRepos = styled.span`
  font-size: 1.2rem;
  background: var(--ticker);
  padding: 0.2rem 0.6rem;
  border-radius: 2.4rem;
`

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;
  fill: var(--icon);
  flex-shrink: 0;
`

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
  margin-right: 0.4rem;
`
