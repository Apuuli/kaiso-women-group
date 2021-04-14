import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
  padding:0;
  margin:0;
  box-sizing:border-box;
  font-family: ${({ theme }) => theme.fonts.main};
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  overflow-y: scroll;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsla(0, 0%, 0%, 0.8);
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}`
