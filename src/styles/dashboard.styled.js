import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  @media (min-width: 1000px) {
    top: 7vw;
  }
  @media (min-width: 1100px) {
    top: 6vw;
  }
  @media (min-width: 1200px) {
    top: 5vw;
  }
  @media (max-width: 820px) {
    top: 9vw;
  }
  @media (max-width: 500px) {
    top: 15vw;
  }
`;
export const NotesContainer = styled.div`
  width: 100%;
  padding: 10px;
`;