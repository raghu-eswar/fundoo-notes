import React from "react";
import IconButton from "@material-ui/core/IconButton";
import BrushIcon from '@material-ui/icons/Brush';

export default function SketchTool(props) {
  return (
    <IconButton {...props} onClick={props.openSketchBoard}>
      <BrushIcon />
    </IconButton>
  );
}
