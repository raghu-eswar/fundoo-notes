import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={anchorEl}
        onClose={closeMenu}
      >
        {props.menuItems &&
          props.menuItems.map((menuItem) => (
            <MenuItem onClick={menuItem.onClick}>{menuItem.title}</MenuItem>
          ))}
      </Menu>
    </>
  );
}
