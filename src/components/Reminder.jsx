import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddAlertSharpIcon from "@material-ui/icons/AddAlertSharp";

export default function Reminder(props) {
  return (
    <IconButton {...props}>
      <AddAlertSharpIcon />
    </IconButton>
  );
}
