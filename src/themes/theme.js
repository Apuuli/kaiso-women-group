export const fonts = {
  main: "Fira sans, sans-serif",
  slatedtext: "Caveat, cursive",
}
export const colors = {
  darkPurple: "#471871",
  mediumPurple: "#653496",
  lightPurple: "#7B52AE",
  lightGreen: "#94c773",
  mediumGreen: "#74B652",
  darkGreen: "#56941E",
  textColor: "#474747",
}
export const transitionDefault = "transitional:all 0.5s ease-in-out"

export const transitionFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => `transition:${property} ${time} ${type}`

export const transitionObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => `transition:${property} ${time} ${type}`

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => `border:${width} ${type} ${color}`

export const letterSpacing = ({ spacing = "0.15rem" }) =>
  `letter-spacing:${spacing}`
