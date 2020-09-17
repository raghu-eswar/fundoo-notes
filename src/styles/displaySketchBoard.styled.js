import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const SketchBoardContainer = styled(Container)`
  background-color: #ffffff;
  outline: none;
  .MuiToolbar-root {
    display: none;
  }
  canvas {
    pointer-events: none;
  }
`;
