import styled from "styled-components"

export const ContactSection = styled.div`
  width: 100%;
`
export const ContactText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  .contact-image {
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0.5rem 1rem 1.5rem ${({ theme }) => theme.colors.darkGreen};
    overflow: hidden;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const ContactHeader = styled.div`
  font-size: 1rem;
`
export const ContactBody = styled.div`
  font-size: 1rem;
  padding: 1rem 0rem;
  h2 {
    text-align: center;
  }
`
