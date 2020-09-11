import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ColorLensIcon from '@material-ui/icons/ColorLens';

export default function AddColor(props) {
  return (
    <IconButton {...props}>
      <ColorLensIcon />
    </IconButton>
  );
}
