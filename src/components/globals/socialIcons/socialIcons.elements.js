import styled from "styled-components"

export const IconContainer = styled.div`
  display: none;

  @media (min-width: 992px) {
    background: rgba(255, 255, 255, 0.3);
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Icon = styled.a`
  color: ${({ theme }) => theme.colors.darkPurple};
  height: 100%;
  text-decoration: none;
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin: 0.5vh 1vw;
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
