import React from "react";
import { SketchField } from "react-sketch";
import * as Styled from "../styles/displaySketchBoard.styled";

export default function DisplaySketchBoard(props) {
  const [drawings, setDrawings] = React.useState(props.drawing);
  const sketch = React.useRef();
  React.useEffect(() => {
    setDrawings(props.drawing);
    setTimeout(() => {
      sketch.current.zoom(props.zoom);
    }, 200);
  }, [props.drawing, props.zoom]);

  return (
    <Styled.SketchBoardContainer maxWidth="sm" onClick={props.openSketchBoard}>
      <SketchField
        ref={sketch}
        backgroundColor={props.drawing.backgroundColor}
        width={props.width}
        height={props.height}
        value={drawings}
      />
    </Styled.SketchBoardContainer>
  );
}
