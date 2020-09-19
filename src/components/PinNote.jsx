import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';

export default function PinNote(props) {
  return (
    <IconButton {...props} onClick={props.togglePin}>
      <Icon className="fa fa-thumb-tack" style={{color: props.isPined?'#000000':'#0000008a'}}/>
    </IconButton>
  );
}
