import styled, { css } from 'styled-components'
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri'

export const Container = styled.div``
export const Flex = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-left: 2.4rem;
    > h1 {
      font-size: 2.6rem;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;
    }
    > h2 {
      font-size: 2rem;
      color: var(--username);
      font-weight: 300;
    }
  }
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    > div {
      margin-left: 0;
      margin-top: 1.6rem;
    }
  }
`
export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 100%;
    margin-top: -4.8rem;
  }
`
export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  > li {
    display: flex;
    align-items: center;
    > span {
      font-size: 1.4rem;
      color: var(--gray);
    }
    > * {
      margin-right: 0.6rem;
    }
  }
`
export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
  li + li {
    margin-top: 1rem;
  }
  span {
    margin-left: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;
  fill: var(--icon);
  flex-shrink: 0;
`

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCSS}
`
export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`
export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`
export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`
export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`
