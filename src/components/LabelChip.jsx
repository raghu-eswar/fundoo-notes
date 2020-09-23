import React from "react";
import Chip from "@material-ui/core/Chip";

export default function LabelChip(props) {
  return (
    <Chip
      label={props.label.label}
      onDelete={() => props.removeLabels(props.label)}
      style={{ backgroundColor: "rgba(0,0,0,0.08)", margin: "0 5px" }}
    />
  );
}
