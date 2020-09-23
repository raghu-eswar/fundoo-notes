import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

export default function DeleteOrRestoreNoteOption(props) {
  return (
    <MenuItem
      onClick={props.deleteNote ? props.deleteNote : props.restoreNote}
      style={{ width: "10rem" }}
    >
      {props.deleteNote ? "Delete Note" : "Restore"}
    </MenuItem>
  );
}
