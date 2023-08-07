import { createGlobalStyle } from "styled-components";

export const GloblaStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  background-color: #F9F7F7;
  color: #112D4E;
}

body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-thumb {
    background-color: #bedcfa;
    border-radius: 15px;
    height: 10px;
  }
  body::-webkit-scrollbar-thumb:hover {
    background-color: #3f72af;
  }

  body::-webkit-scrollbar-track {
    background-color: #F9F7F7;
    border-radius: 10px;
  }

  @media (max-width:500px){
    body::-webkit-scrollbar {
  width: 5px;
}
  }

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}`;
