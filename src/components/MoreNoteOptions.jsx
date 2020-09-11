import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function MoreNoteOptions(props) {
  return (
    <IconButton {...props}>
      <MoreVertIcon />
    </IconButton>
  );
}
