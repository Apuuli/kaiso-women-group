import styled from "styled-components"

export const IconContainer = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Icon = styled.a`
  color: inherit;
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  margin: 0.25rem 0.5rem;
  transition: all 0.4s ease-in-out;
  &:hover {
    .facebook {
      color: blue;
    }
    .youtube {
      color: red;
    }
    .intagram {
      color: red;
    }
    .whatsapp {
      color: green;
    }
    .twitter {
      color: blue;
    }
  }
`
