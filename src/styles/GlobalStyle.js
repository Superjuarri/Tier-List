import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;

    font-family: 'Arial'
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

`
