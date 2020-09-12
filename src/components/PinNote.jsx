import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';

export default function PinNote(props) {
  return (
    <IconButton {...props}>
      <Icon className="fa fa-thumb-tack"/>
    </IconButton>
  );
}
