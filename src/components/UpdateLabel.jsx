import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import LabelIcon from "@material-ui/icons/Label";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import * as Styled from "../styles/editLabels.styled";

export default function UpdateLabels(props) {
  const [focus, setFocus] = React.useState(false);
  const [label, setLabel] = React.useState(props.label);
  const input = React.useRef();

  const handleFocus = () => {
    if (!focus) {
      input.current.focus();
      setFocus(true);
    }
  };

  const updateLabel = () => {
    if (label.label && label.label !== props.label.label) {
      props.updateLabel(label);
    }
    setFocus(false);
  };

  return (
    <Styled.LableContainer>
      <IconButton
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => setFocus(false)}
      >
        {focus ? <DeleteIcon /> : <LabelIcon />}
      </IconButton>
      <Styled.StyledTextField
        onFocus={() => setFocus(true)}
        ref={input}
        value={label.label}
        onChange={(event) => setLabel({ ...label, label: event.target.value })}
      />
      {!focus && (
        <IconButton onClick={handleFocus}>
          <EditIcon />
        </IconButton>
      )}
      {focus && (
        <IconButton onClick={updateLabel}>
          <DoneIcon />
        </IconButton>
      )}
    </Styled.LableContainer>
  );
}
