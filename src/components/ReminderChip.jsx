import React from "react";
import Chip from "@material-ui/core/Chip";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

export default function ReminderChip(props) {
  let lable = "";
  let date = new Date(props.reminder);
  let temp = date.getDate() - new Date().getDate();
  switch (temp) {
    case 0:
      lable =
        "To Day " +
        date.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
      break;
    case 1:
      lable =
        "Tomorrow " +
        date.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
      break;
    default:
      lable =
        date.toLocaleString("en-us", { month: "short" }) +
        " " +
        date.toLocaleString("en-us", { day: "numeric" }) +
        " " +
        date.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
      break;
  }

  return (
    <Chip
      icon={<AccessAlarmIcon />}
      label={lable}
      onDelete={props.deleteReminder}
      style={{backgroundColor: 'rgba(0,0,0,0.08)'}}
    />
  );
}
