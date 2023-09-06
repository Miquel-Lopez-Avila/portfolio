import { createGlobalStyle } from 'styled-components';
import { reset }             from 'styled-reset';
import redDisplay from 'application/fonts/main-fonts/Red_Hat_Display/RedHatDisplay-VariableFont_wght.ttf'
import inter from 'application/fonts/main-fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
import Fonts                 from '../fonts';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-size: 62.5%;
    position: relative;
    margin: 0;
    padding: 0;
    color: #222;
    background-color: #ffffff;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${Fonts.inter}
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .logo-font {
    font-size: 30px;
  }

  * {
    box-sizing: border-box;
  }

  b, strong {
    font-weight: 500;
  }

  h1 {
    ${Fonts.redDisplay}
  }

  @font-face {
    font-family: "Inter";
    src: url(${inter}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Red-Hat-Display";
    src: url(${redDisplay}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }
`;

export default GlobalStyles;
