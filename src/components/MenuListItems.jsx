import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import AddAlertSharpIcon from "@material-ui/icons/AddAlertSharp";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteSweepRoundedIcon from "@material-ui/icons/DeleteSweepRounded";

export default function MenuListItems(props) {
  return (
    <>
      <ListItem
        button
        selected={props.selectedMenuIndex === 0}
        onClick={() => props.selectMenuOption(0)}
      >
        <ListItemIcon>
          <EmojiObjectsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItem>
      <ListItem
        button
        selected={props.selectedMenuIndex === 1}
        onClick={() => props.selectMenuOption(1)}
      >
        <ListItemIcon>
          <AddAlertSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Reminders" />
      </ListItem>
      <ListItem
        button
        selected={props.selectedMenuIndex === 2}
        onClick={() => props.selectMenuOption(2)}
      >
        <ListItemIcon>
          <EditOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Edit labels" />
      </ListItem>
      <ListItem
        button
        selected={props.selectedMenuIndex === 3}
        onClick={() => props.selectMenuOption(3)}
      >
        <ListItemIcon>
          <ArchiveOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Archive" />
      </ListItem>
      <ListItem
        button
        selected={props.selectedMenuIndex === 4}
        onClick={() => props.selectMenuOption(4)}
      >
        <ListItemIcon>
          <DeleteSweepRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
    </>
  );
}
