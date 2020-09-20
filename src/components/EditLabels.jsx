import React from "react";
import Model from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
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

  return (
    <Model open={props.showLabels} onClose={props.hideLabels}>
      <Styled.MainContainer maxWidth="xs">
        <Typography variant="h6" align="left">
          Edit Labels
        </Typography>
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
          <IconButton disabled={!focus}>{focus && <DoneIcon />}</IconButton>
        </Styled.LableContainer>
        <Divider />
        <Styled.ButtonWraper>
          <Button onClick={props.hideLabels}>Done</Button>
        </Styled.ButtonWraper>
      </Styled.MainContainer>
    </Model>
  );
}
