import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import DeleteOrRestoreNoteOption from "./DeleteOrRestoreNoteOption";

export default function MoreNoteOptions(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton {...props} onClick={openMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={anchorEl} onClose={closeMenu}>
        {props.deleteNote && (
          <DeleteOrRestoreNoteOption deleteNote={props.deleteNote} />
        )}
        {props.restoreNote && (
          <DeleteOrRestoreNoteOption restoreNote={props.restoreNote} />
        )}
      </Menu>
    </>
  );
}
