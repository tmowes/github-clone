import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  > p {
    font-size: 1.6rem;
  }
`
export const Breadcrumb = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-size: 1.8rem;
  > a {
    color: var(--link);
    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
  > span {
    margin: 0 0.4rem;
  }
`
export const Username = styled(Link)`
  margin-left: 0.8rem;
`
export const Reponame = styled(Link)`
  font-weight: 600;
`
export const Stats = styled.ul`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  > li {
    display: flex;
    align-items: center;
    margin-right: 0.8rem;
    > * {
      margin-right: 0.6rem;
      color: var(--gray);
    }
  }
`
export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
  padding: 1.2rem 1.6rem;
  border-radius: 2.4rem;
  background: var(--gray-dark);
  > span {
    color: var(--primary);
  }
  > svg {
    fill: var(--primary);
    margin-right: 1rem;
  }
`
