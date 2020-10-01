import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import AddAlertSharpIcon from "@material-ui/icons/AddAlertSharp";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteSweepRoundedIcon from "@material-ui/icons/DeleteSweepRounded";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import { menuOptions } from "../enumeration/menuOptions";

export default function MenuListItems(props) {
  return (
    <>
      <ListItem
        button
        selected={props.selectedMenuOption === menuOptions.NOTES}
        onClick={() => props.selectMenuOption(menuOptions.NOTES)}
      >
        <ListItemIcon>
          <EmojiObjectsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItem>
      <ListItem
        button
        selected={props.selectedMenuOption === menuOptions.REMINDERS}
        onClick={() => props.selectMenuOption(menuOptions.REMINDERS)}
      >
        <ListItemIcon>
          <AddAlertSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Reminders" />
      </ListItem>
      {props.labels.map((label) => (
        <ListItem
          button
          selected={props.selectedMenuOption === label.id}
          onClick={() => props.selectMenuOption(label.id)}
        >
          <ListItemIcon>
            <LabelOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={label.label} />
        </ListItem>
      ))}
      <ListItem
        button
        selected={props.selectedMenuOption === menuOptions.EDIT_LABELS}
        onClick={() => props.selectMenuOption(menuOptions.EDIT_LABELS)}
      >
        <ListItemIcon>
          <EditOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Edit labels" />
      </ListItem>
      <ListItem
        button
        selected={props.selectedMenuOption === menuOptions.ARCHIVE}
        onClick={() => props.selectMenuOption(menuOptions.ARCHIVE)}
      >
        <ListItemIcon>
          <ArchiveOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Archive" />
      </ListItem>
      <ListItem
        button
        selected={props.selectedMenuOption === menuOptions.TRASH}
        onClick={() => props.selectMenuOption(menuOptions.TRASH)}
      >
        <ListItemIcon>
          <DeleteSweepRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
    </>
  );
}
