import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const NoteContainer = styled(Card)`
  width: 15rem;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
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
  margin: 10px 0;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
export const SketchBoardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  .MuiContainer-root {
    padding: 0;
  }
`;
