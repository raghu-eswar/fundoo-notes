import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

export default function DeleteOrRestoreNoteOption(props) {
  return (
    <MenuItem onClick={props.deleteNote ? props.deleteNote : props.restoreNote}>
      {props.deleteNote ? "Delete Note" : "Restore"}
    </MenuItem>
  );
}
