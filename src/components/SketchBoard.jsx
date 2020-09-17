import React from "react";
import Menu from "@material-ui/core/Menu";
import CardContent from "@material-ui/core/CardContent";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { SketchField, Tools } from "react-sketch";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Slider from "@material-ui/core/Slider";
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

  selectTool = (event) => {
    this.setState({
      tool: event.target.value,
    });
  };

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
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            Sketch board
          </Typography>
          <IconButton
            onClick={(e) =>
              this.setState({ expandTools: !this.state.expandTools })
            }
          >
            <CreateIcon />
          </IconButton>
          <Menu
            open={this.state.expandTools}
            onClose={() =>
              this.setState({ expandTools: !this.state.expandTools })
            }
          >
            <CardContent>
              <div>
                <div>
                  <TextField
                    select={true}
                    label="Tools"
                    value={this.state.tool}
                    onChange={this.selectTool}
                    helperText="Please select Tool"
                  >
                    <MenuItem value={Tools.Select} key="Select">
                      Select
                    </MenuItem>
                    <MenuItem value={Tools.Pencil} key="Pencil">
                      Pencil
                    </MenuItem>
                    <MenuItem value={Tools.Line} key="Line">
                      Line
                    </MenuItem>
                    <MenuItem value={Tools.Rectangle} key="Rectangle">
                      Rectangle
                    </MenuItem>
                    <MenuItem value={Tools.Circle} key="Circle">
                      Circle
                    </MenuItem>
                  </TextField>
                </div>
              </div>
              <br />
              <br />
              <Typography>Line Weight</Typography>
              <Slider
                value={this.state.lineWidth}
                onChange={(e, v) => this.setState({ lineWidth: v })}
              />
              <br />
            </CardContent>
          </Menu>
        </Toolbar>
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
