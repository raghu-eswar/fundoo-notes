import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import Popover from "@material-ui/core/Popover";
import { CirclePicker } from "react-color";

const colors = [
  "#ffffff",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
];

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
        <CirclePicker
          width="250px"
          onChangeComplete={props.addColor}
          colors={colors}
        />
      </Popover>
    </div>
  );
}
