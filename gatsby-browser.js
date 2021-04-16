import React from "react"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./src/themes/GlobalStyles"
import * as theme from "./src/themes/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)

// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     import(`intersection-observer`)
//     // console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }
