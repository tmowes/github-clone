import styled from 'styled-components'

export const Container = styled.div`
  --horizontalPadding: 1.6rem;
  --verticalPadding: 2.4rem;
  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 128rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);
  @media (min-width: 768px) {
    width: 25%;
  }
`
export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);
  @media (min-width: 768px) {
    width: 75%;
  }
`
export const Repos = styled.div`
  margin-top: var(--verticalPadding);
  > h2 {
    font-size: 1.6rem;
    font-weight: normal;
  }
  > div {
    margin-top: 0.8rem;
    display: grid;
    grid-gap: 1.6rem;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`
export const CalendarHeading = styled.span`
  font-size: 1.6rem;
  margin: 3.6rem 0 0.8rem;
  display: inline-flex;
`
export const Tab = styled.div`
  background: var(--primary);
  &.mobile {
    margin-top: var(--verticalPadding);
    .content {
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  &.desktop {
    display: none;
    @media (min-width: 768px) {
      display: unset;
      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 128rem;
      }
      .offset {
        width: 25%;
        margin-right: var(--horizontalPadding);
      }
    }
  }
`

export const Line = styled.span`
  display: flex;
  width: 200vw;
  border-bottom: 1px solid var(--border);
  margin-left: -50vw;
`
