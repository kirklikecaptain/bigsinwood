import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'DaisyWheel', Consolas, ‘Andale Mono WT’, ‘Andale Mono’, ‘Lucida Console’, ‘Lucida Sans Typewriter’, ‘DejaVu Sans Mono’, ‘Bitstream Vera Sans Mono’, ‘Liberation Mono’, ‘Nimbus Mono L’, Monaco, ‘Courier New’, Courier, monospace;
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
  }

  ol, ul {
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1000px;
    margin: auto;
  }

  .edges {
    padding: 0 1rem;
    @media (min-width: 500px) {
      padding: 0 2rem;
    }
  }

  p {
    line-height: 1.5;
  }

  .slick-next:before, .slick-prev:before {
    color: rgba(0,0,0,.3);
  }

  .slick-slide {
    padding: 0 8px;
  }
`;

export default GlobalStyle;
