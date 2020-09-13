import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArchiveIcon from "@material-ui/icons/Archive";
import UnarchiveIcon from "@material-ui/icons/Unarchive";

export default function ArchiveNote(props) {
  return (
    <IconButton {...props} onClick={props.toggleArchive}>
      {props.isArchived ? <UnarchiveIcon /> : <ArchiveIcon />}
    </IconButton>
  );
}
