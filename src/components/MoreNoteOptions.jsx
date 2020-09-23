import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import DeleteOrRestoreNoteOption from "./DeleteOrRestoreNoteOption";
import AddLabelsOption from "./AddLabelsOption";

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
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={anchorEl}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {props.deleteNote && (
          <DeleteOrRestoreNoteOption deleteNote={props.deleteNote} />
        )}
        {props.restoreNote && (
          <DeleteOrRestoreNoteOption restoreNote={props.restoreNote} />
        )}
        {props.addLabels && props.labels && (
          <AddLabelsOption
            labels={props.labels}
            addLabels={props.addLabels}
            removeLabels={props.removeLabels}
            activeLabels={props.activeLabels}
          />
        )}
      </Menu>
    </>
  );
}
