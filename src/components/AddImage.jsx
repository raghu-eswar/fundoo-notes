import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

export default function AddImage(props) {
  return (
    <IconButton {...props}>
      <PhotoLibraryIcon />
    </IconButton>
  );
}
