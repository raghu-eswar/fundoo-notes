import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const NoteContainer = styled(Card)`
  width: ${(props) => props.isGrid? '15rem': window.innerWidth/2+'px'};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  border-radius: 8px;
  .MuiCardContent-root {
    padding: 0 16px;
  }
  button {
    padding: 6px;
    visibility: hidden;
  }
  button .MuiSvgIcon-root {
    font-size: 1.3rem;
  }
  &:hover button {
    visibility: visible;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
export const SketchBoardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  .MuiContainer-root {
    padding: 0;
  }
`;
