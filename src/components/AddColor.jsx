import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import Popover from "@material-ui/core/Popover";
import { SketchPicker } from "react-color";

export default function AddColor(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const closePicker = () => {
    setAnchorEl(null);
    if (props.onPickerClose) props.onPickerClose();
  };

  return (
    <div>
      <IconButton
        {...props}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <ColorLensIcon />
      </IconButton>
      <Popover
        open={anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={closePicker}
      >
        <SketchPicker color={props.color} onChangeComplete={props.addColor} />
      </Popover>
    </div>
  );
}
