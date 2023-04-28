import { theme } from '../theme';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
  overflow: scroll;
  }

  html,
  body {
  max-width: 100%;
  overflow-x: hidden;
  }

  ::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
  }

  iframe {
  display: none;
 }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    font-family: ${theme.typography.fontFamily}
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${theme.palette.white};
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  `;
