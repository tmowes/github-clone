import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
      --primary: #ffffff;
      --black: #1b1f23;
      --grey: #586069;
      --grey-light: #6a737d;
      --grey-dark: #24292e;
      --orange: #f9826c;
      --header: #24292e;
      --username: #666;
      --search: rgba(255, 255, 255, 0.13);
      --search-placeholder: hsla(0,0%,100%,.75);
      --icon: #6a737d;
      --link: #0366d6;
      --border: #e1e4e8;
      --ticker: rgba(209,213,218,.5);
      --calendar-scale-0: #ebedf0;
      --calendar-scale-1: #9BE9A8;
      --calendar-scale-2: #3FC463;
      --calendar-scale-3: #30A14E;
      --calendar-scale-4: #216E3A;
      --javascript: #f1e05a;
      --typescript: #2b7489;
      --other-language: #8257e5;
  }
  html {
    min-height: 100%;
    background:  var(--primary);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, button, input, textarea {
    border: 0;
    outline: 0;
    background: none;
    font-size: 1.6rem;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
  }
  button, a {
    text-decoration: none;
  }
  ul, li {
    list-style: none;
    /* padding: 8px; */
  }
`
