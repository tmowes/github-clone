import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 1rem 1.6rem;
`

export const GithubLogo = styled(FaGithub)`
  fill: var(--primary);
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
`
export const SearchForm = styled.form`
  padding-left: 1.6rem;
`
export const Input = styled.input.attrs({
  placeholder: ' Enter Username or Repo...',
})`
  background: var(--search);
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
  width: 31.8rem;
  transition: width 0.2s ease-out, color 0.2s ease-out;
  &:focus {
    width: 31.8rem;
  }
`
