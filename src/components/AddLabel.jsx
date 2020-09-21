import React from "react";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import * as Styled from "../styles/editLabels.styled";

export default function EditLabels(props) {
  const [focus, setFocus] = React.useState(true);
  const [newLable, setNewLable] = React.useState("");
  const input = React.useRef();

  const handleFocus = () => {
    if (focus) setNewLable("");
    if (!focus) input.current.focus();
    setFocus(!focus);
  };

  const addLabel = () => {
    if (newLable) {
      props.addNewLabel(newLable);
      setNewLable("");
    }
  };

  return (
    <Styled.LableContainer>
      <IconButton onClick={handleFocus}>
        {focus ? <ClearIcon /> : <AddIcon />}
      </IconButton>
      <Styled.StyledTextField
        onFocus={() => setFocus(true)}
        ref={input}
        placeholder="Create new label"
        value={newLable}
        onChange={(event) => setNewLable(event.target.value)}
      />
      <IconButton disabled={!focus} onClick={addLabel}>
        {focus && <DoneIcon />}
      </IconButton>
    </Styled.LableContainer>
  );
}
