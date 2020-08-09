import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  font-size: 60%;
  --background: #F0F0F7;
  --primary-lighter: #9871F5;
  --primary-light: #916BEA;
  --primary: #8257E5;
  --primary-dark: #774DD6;
  --primary-darker: #6842C2;
  --secondary: #04D361;
  --secondary-dark: #04BF58;
  --title-primary: #FFFFFF;
  --text-primary: #D4C2FF;
  --text-title: #32264D;
  --text-complement: #9C98A6;
  --text-base: #6A6180;
  --line-white: #E6E6F0;
  --input-background: #F8F8FC;
  --button-text: #FFFFFF;
  --box-base: #FFFFFF;
  --box-footer: #FAFAFC;
  --primary-darker2: #21222c;
  --secondary-darker: #282a36;
  --search: #202327;
  --white: #D9D9D9;
  --gray: #7A7A7A;
  --outline: #2F3336;
  --retweet: #00C06B;
  --like: #E8265E;
  --twitter: #33A1F2;
  --twitter-dark-hover: #011017;
  --twitter-light-hover: #2C8ED6;
  --background-darker: #28262e;
  --PikTewOrange: #D46900;
  --PikTewBlue: #1466E1;
  --PikTewCurly: #202428;
  --orange: #E55838;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #root {
  height: 100vh;
}
body {
  color: var(--text-title);
  background:  var(--background)
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
}
body, button, input, textarea {
  border: 0;
  outline: 0;
  background: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--text-base);
  font-family: Poppins Archivo -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
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
li {
  list-style-type: none;
  padding: 8px;
}
.container {
  width: 100vw;
  max-width: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1100px) {
    max-width: 1100px;
  }
}
@media (min-width: 700px) {
  :root {
    font-size: 62.5%
  }
}
`
