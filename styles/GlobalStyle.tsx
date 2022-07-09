import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}
* {
    margin: 0;
    padding: 0;
    line-height: calc(1em + 0.725rem);
}
html,
body {
    height: 100%;
}
body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}
a {
    text-decoration: none;
}
img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}
canvas {
    height: 100vh;
    width: 100vw;
}
input,
button,
textarea,
select {
    font: inherit;
}
button {
  background: none;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}
#root,
#__next {
    isolation: isolate;
}
html {
    scroll-behavior: smooth;
}
ul{
  list-style: none;
}

#__next{
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
}
`;

export default GlobalStyle;
