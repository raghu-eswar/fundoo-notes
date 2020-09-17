import React from "react";
import { CompactPicker } from "react-color";
import Menu from "@material-ui/core/Menu";
import CardContent from "@material-ui/core/CardContent";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import AddIcon from "@material-ui/icons/Add";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import { SketchField, Tools } from "react-sketch";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import ColorizeIcon from "@material-ui/icons/Colorize";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import Slider from "@material-ui/core/Slider";
import DoneAllIcon from "@material-ui/icons/DoneAll";
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
      expandBackgroundColors: false,
      text: "",
    };
  }

  selectTool = (event) => {
    this.setState({
      tool: event.target.value,
    });
  };

  save = () => {
    this.props.setDrawing(this.sketch.toJSON());
    this.props.close();
    this.setState({ drawings: this.sketch.toJSON() });
  };

  undo = () => {
    this.sketch.undo();
    this.setState({
      canUndo: this.sketch.canUndo(),
      canRedo: this.sketch.canRedo(),
    });
  };

  redo = () => {
    this.sketch.redo();
    this.setState({
      canUndo: this.sketch.canUndo(),
      canRedo: this.sketch.canRedo(),
    });
  };

  onSketchChange = () => {
    let prev = this.state.canUndo;
    let now = this.sketch.canUndo();
    if (prev !== now) {
      this.setState({ canUndo: now });
    }
  };

  addText = () => this.sketch.addText(this.state.text);

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
              <label htmlFor="zoom">Zoom</label>
              <div>
                <IconButton onClick={(e) => this.sketch.zoom(1.25)}>
                  <ZoomInIcon />
                </IconButton>
                <IconButton onClick={(e) => this.sketch.zoom(0.8)}>
                  <ZoomOutIcon />
                </IconButton>
              </div>
              <div>
                <div>
                  <TextField
                    label="Text"
                    helperText="Add text to Sketch"
                    onChange={(e) => this.setState({ text: e.target.value })}
                    value={this.state.text}
                  />
                </div>
                <div>
                  <IconButton color="primary" onClick={this.addText}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </CardContent>
          </Menu>
          <IconButton
            onClick={(e) =>
              this.setState({ expandColors: !this.state.expandColors })
            }
          >
            <ColorizeIcon />
          </IconButton>
          <Menu
            open={this.state.expandColors}
            onClose={() =>
              this.setState({ expandColors: !this.state.expandColors })
            }
          >
            <CardContent>
              <label htmlFor="lineColor">Line</label>
              <br />
              <CompactPicker
                id="lineColor"
                color={this.state.lineColor}
                onChange={(color) => this.setState({ lineColor: color.hex })}
              />
            </CardContent>
          </Menu>
          <IconButton
            onClick={(e) =>
              this.setState({
                expandBackgroundColors: !this.state.expandBackgroundColors,
              })
            }
          >
            <ColorLensIcon />
          </IconButton>
          <Menu
            open={this.state.expandBackgroundColors}
            onClose={() =>
              this.setState({
                expandBackgroundColors: !this.state.expandBackgroundColors,
              })
            }
          >
            <CardContent>
              <CompactPicker
                color={this.state.backgroundColor}
                onChange={(color) =>
                  this.setState({ backgroundColor: color.hex })
                }
              />
            </CardContent>
          </Menu>
          <IconButton disabled={!this.state.canUndo} onClick={this.undo}>
            <UndoIcon />
          </IconButton>
          <IconButton disabled={!this.state.canRedo} onClick={this.redo}>
            <RedoIcon />
          </IconButton>
          <IconButton onClick={this.save}>
            <DoneAllIcon />
          </IconButton>
        </Toolbar>
        <SketchField
          ref={(c) => (this.sketch = c)}
          lineColor={this.state.lineColor}
          lineWidth={this.state.lineWidth}
          backgroundColor={this.state.backgroundColor}
          width={this.state.sketchWidth}
          height={this.state.sketchHeight}
          value={this.state.drawings}
          onChange={this.onSketchChange}
          tool={this.state.tool}
          style={{ border: "1px solid gray" }}
        />
      </Container>
    );
  };
}

export default SketchBoard;
