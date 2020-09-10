import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import AddAlertSharpIcon from "@material-ui/icons/AddAlertSharp";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteSweepRoundedIcon from "@material-ui/icons/DeleteSweepRounded";

export default function MenuListItems() {
  return (
    <>
      <ListItem button selected>
        <ListItemIcon>
          <EmojiObjectsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AddAlertSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Reminders" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EditOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Edit labels" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArchiveOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Archive" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DeleteSweepRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
    </>
  );
}
