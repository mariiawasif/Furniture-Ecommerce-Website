// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import BergenSansSemiBoldWoff2 from '../../Fonts/BergenSans-SemiBold.woff2';
import BergenSansSemiBoldWoff from '../../Fonts/BergenSans-SemiBold.woff';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Bergen Sans Semi Bold';
    src: url(${BergenSansSemiBoldWoff2}) format('woff2'),
         url(${BergenSansSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyles;
