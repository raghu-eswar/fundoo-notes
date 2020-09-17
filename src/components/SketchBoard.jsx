import React from "react";
import { SketchField, Tools } from "react-sketch";
import Container from "@material-ui/core/Container";

class SketchBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lineWidth: 5,
      lineColor: "black",
      backgroundColor: props.drawing.backgroundColor,
      tool: Tools.Pencil,
      drawings: props.drawing,
      canUndo: false,
      canRedo: false,
      controlledSize: false,
      sketchWidth: props.width,
      sketchHeight: props.height,
      expandTools: false,
      expandControls: false,
      expandColors: false,
      expandBack: false,
      text: "",
    };
  }

  render = () => {
    return (
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "#ffffff",
          outline: "none",
          paddingBottom: 20,
          marginTop: 50,
        }}
      >
        <SketchField
          ref={(c) => (this.sketch = c)}
          lineColor={this.state.lineColor}
          lineWidth={this.state.lineWidth}
          backgroundColor={this.state.backgroundColor}
          width={this.state.sketchWidth}
          height={this.state.sketchHeight}
          value={this.state.drawings}
          tool={this.state.tool}
          style={{ border: "1px solid gray" }}
        />
      </Container>
    );
  };
}

export default SketchBoard;
