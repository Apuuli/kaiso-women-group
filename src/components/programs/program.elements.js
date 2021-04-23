import styled from "styled-components"

export const ProgramContainer = styled.div`
  width: 90vw;
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Program = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0.5rem 1rem 1.5rem hsla(120, 100%, 25%, 0.8);
  overflow: hidden;
  .program-image-wrapper {
    height: 100%;
    width: 100%;
  }
`
export const ProgramText = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 1rem;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 1;
  }
`
export const ProgramHeader = styled.h3`
  font-size: clamp(2.25rem, 2.5vw, 1.8rem);
`
export const ProgramBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  letter-spacing: 0.1rem;
`
export const ProgramActivity = styled.div`
  display: inline-flex;
  font-size: 0.8rem;
  padding: 0.125rem 0.25rem;
  margin: 0 0.25rem;
  font-weight: bold;
  text-transform: uppercase;
  span {
    margin-left: 0.25rem;
  }
`
