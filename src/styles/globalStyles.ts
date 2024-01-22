import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    background-image: url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png);
    background-position: 0px 0px;
    background-size: 200px 200px;
    font-family: 'League Spartan', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #000;
    line-height: 1.5;
    
  }
  a {
    text-decoration: none;
    color: #150e1c;
    font-weight: 500;
    font-size: 3rem;
  }
  h1, h2, h3, span {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
