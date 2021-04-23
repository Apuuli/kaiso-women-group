import styled from "styled-components"

export const AddressContainer = styled.address`
  width: 100%;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 1vh auto;
`
export const AddressHeader = styled.h3`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  text-align: start;
  text-transform: capitalize;
  padding: 0.5vh 0;
  margin: 0.5vh 0;
`
export const AddressBody = styled.div`
  font-size: clamp(0.8rem, 2.5vw, 1.2rem);
  padding: 0.5vh 0;
  margin: 0.5vh 0;
  text-align: start;
  p {
    padding: 0.25vh 0;
    margin: 0.25vh 0;
  }
`
