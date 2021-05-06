import styled from "styled-components"

export const BannerWrappper = styled.section``
export const BannerImage = styled.div`
  position: relative;
  height: 100vh;
  .banner-image {
    background: linear-gradient(
      to right rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    );
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
  background: rgba(255, 255, 255, 0.6);
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  margin-bottom: 1.5vh;
  margin-right: 3vw;
`
export const BannerHeader = styled.h2`
  letter-spacing: 0.12rem;
  font-size: clamp(1.8rem, 2.5vw, 2.24rem);
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
    font-size: clamp(2rem, 2.5vw, 2.5rem);
    color: ${({ theme }) => theme.colors.darkPurple};
  }
  .environment {
    font-size: clamp(2rem, 2.5vw, 2.5rem);
    color: ${({ theme }) => theme.colors.darkGreen};
  }
  @media (max-width: 768px) {
    /* letter-spacing: normal; */
    font-size: 2rem;
    padding: 0.125vh 0.25vw;
  }
`
export const BannerBody = styled.div`
  text-align: center;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 900;
  color: ${({ theme }) => theme.colors.darkGreen};
  line-height: 1.8;
  letter-spacing: 0.015rem;
  @media (max-width: 768px) {
    /* letter-spacing: normal; */
    font-size: 1rem;
    padding: 0.025rem 0.25rem;
  }
`
