import styled from "styled-components"

export const ValueContainer = styled.div`
  padding: 1.5rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
