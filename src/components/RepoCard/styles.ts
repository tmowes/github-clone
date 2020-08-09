import styled, { css } from 'styled-components'
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
  border: 1px solid var(--border);
  border-radius: 0.6rem;
`

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;
    > a {
      margin-left: 0.8rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--link);
      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }
  > p {
    margin: 0.8rem 0 1.6rem;
    font-size: 1.2rem;
    color: var(--gray);
    letter-spacing: 0.01rem;
  }
`

export const BottomSide = styled.div`
  > ul {
    display: flex;
    align-items: center;
    > li {
      display: flex;
      align-items: center;
      margin-right: 1.6rem;
      > span {
        margin-left: 0.6rem;
        font-size: 1.2rem;
        color: var(--gray);
      }
    }
  }
  .language {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    flex-shrink: 0;
    &.other {
      background: var(--other-language);
    }
    &.javascript {
      background: var(--javascript);
    }
    &.typescript {
      background: var(--typescript);
    }
  }
`

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;
  fill: var(--icon);
  flex-shrink: 0;
`

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`
