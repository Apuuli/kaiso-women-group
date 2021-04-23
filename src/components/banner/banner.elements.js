import styled from "styled-components"

export const BannerWrappper = styled.section``
export const BannerImage = styled.div`
  position: relative;
  height: 100vh;
  .banner-image {
    width: 100%;
    height: 100%;
  }
`
export const BannerTextWrapper = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: end;
`
export const BannerText = styled.div`
  max-width: 70vw;
  background: rgba(255, 255, 255, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  margin-bottom: 3vh;
  margin-right: 3vw;
`
export const BannerHeader = styled.h2`
  letter-spacing: 0.12rem;
  font-size: clamp(1.8rem, 5vw, 2.24rem);
  font-weight: 900;
  padding: 0.25vh 0.5vw;
  margin-bottom: 1vh;
  text-align: center;
  span {
    font-family: ${({ theme }) => theme.fonts.main};
    text-decoration: capitalize;
    font-weight: black;
  }
  .women {
    color: ${({ theme }) => theme.colors.darkPurple};
  }
  .environment {
    color: ${({ theme }) => theme.colors.darkGreen};
  }
  @media (max-width: 768px) {
    /* letter-spacing: normal; */
    font-size: 2rem;
    padding: 0.125vh 0.25vw;
  }
`
export const BannerBody = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.8;
  letter-spacing: 0.015rem;
  figure {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  @media (max-width: 768px) {
    /* letter-spacing: normal; */
    font-size: 1rem;
    padding: 0.025rem 0.25rem;
  }
`
