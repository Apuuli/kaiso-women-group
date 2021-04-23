import styled from "styled-components"

export const ContactsHandleSection = styled.div``
export const HandleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const HandleHeader = styled.h3``
export const HandleBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1vh 2vw;
  margin: 1vh 2vw;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
`
export const HandleEmail = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25vh 1vw;
  margin: 0.25vh 1vw;
  a {
    text-decoration: none;
    margin-left: 1vw;
    color: ${({ theme }) => theme.colors.textColor};
    border-bottom: 0.2rem solid transparent;
    transition: all 0.4s ease-in;
    &:hover {
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
      color: ${({ theme }) => theme.colors.darkPurple};
    }
  }
`
export const HandlePhone = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25vh 1vw;
  margin: 0.25vh 1vw;
  a {
    text-decoration: none;
    margin-left: 1vw;
    color: ${({ theme }) => theme.colors.textColor};
    border-bottom: 0.2rem solid transparent;
    transition: all 0.4s ease-in;
    &:hover {
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
      color: ${({ theme }) => theme.colors.darkPurple};
    }
  }
`
export const HandleFacebook = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25vh 1vw;
  margin: 0.25vh 1vw;
  a {
    text-decoration: none;
    margin-left: 1vw;
    color: ${({ theme }) => theme.colors.textColor};
    border-bottom: 0.2rem solid transparent;
    transition: all 0.4s ease-in;
    &:hover {
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
      color: ${({ theme }) => theme.colors.darkPurple};
    }
  }
`
export const HandleTwitter = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25vh 1vw;
  margin: 0.25vh 1vw;
  a {
    text-decoration: none;
    margin-left: 1vw;
    color: ${({ theme }) => theme.colors.textColor};
    border-bottom: 0.2rem solid transparent;
    transition: all 0.4s ease-in;
    &:hover {
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
      color: ${({ theme }) => theme.colors.darkPurple};
    }
  }
`
