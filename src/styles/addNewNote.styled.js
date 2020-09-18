import styled from "styled-components";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

export const MainContainer = styled(Container)`
  margin: 3rem auto;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  border-radius: 0.5rem;
`;
export const TitleContainer = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: flex-start;
`;
export const NoteContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const OptionsContainer = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
`;
export const CloseButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const SketchBoardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
export const StyledInput = styled(TextField)`
  margin: 6px 0;
  .MuiInputBase-inputMultiline {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
    ::-webkit-input-placeholder {
      color: black;
      font-weight: bold;
    }
    ::-moz-placeholder {
      color: black;
      font-weight: bold;
    }
    :-ms-input-placeholder {
      color: black;
      font-weight: bold;
    }
    :-moz-placeholder {
      color: black;
      font-weight: bold;
    }
  }
  .MuiInput-underline:before {
    border-bottom: none;
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }
  .MuiInput-underline:after {
    border-bottom: none;
  }
`;
