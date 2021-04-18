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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: end;
`
export const BannerText = styled.div`
  max-width: 70vw;
  background: rgba(255, 255, 255, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  margin-bottom: 3rem;
  margin-right: 3rem;
`
export const BannerHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.code};
  letter-spacing: 0.012rem;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
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
    padding: 0.025rem 0.25rem;
  }
`
export const BannerBody = styled.div`
  font-size: 1.25rem;
  line-height: 1.8;
  font-weight: 600;
  letter-spacing: 0.123rem;
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
