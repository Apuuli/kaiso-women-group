import styled from "styled-components"

export const AvatarList = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const AvatarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Avatar = styled.div`
  height: 300px;
  width: 300px;
  .avatar {
    height: 100%;
    border-radius: 50%;
    border: 0.5rem solid ${({ theme }) => theme.colors.mediumPurple};
    box-shadow: 0.5rem 1rem 1.5rem ${({ theme }) => theme.colors.darkGreen};
    overflow: hidden;
  }
`
export const AvatarInfo = styled.div`
  padding: 1.5rem 0;
  h2 {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 0.2rem solid transparent;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.mediumPurple};
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.mediumPurple};
    }
  }
`
export const Handles = styled.div`
  font-size: 0.9rem;
`
