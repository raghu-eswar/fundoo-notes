import React from "react";
import Model from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddLabel from "./AddLabel";
import UpdateLabels from "./UpdateLabel";
import * as Styled from "../styles/editLabels.styled";
import { noteLabels } from "../services/notesServices";

export default function EditLabels(props) {
  const addNewLabel = (label) => {
    let data = { isDeleted: false, label: label, userId: props.userId };
    noteLabels(data, props.token)
      .then((response) => {
        if (response.status === 200) {
          props.updateLabels(props.token);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Model open={props.showLabels} onClose={props.hideLabels}>
      <Styled.MainContainer maxWidth="xs">
        <Typography variant="h6" align="left">
          Edit Labels
        </Typography>
        <AddLabel addNewLabel={addNewLabel} />
        {props.labels.map((label) => (
          <UpdateLabels label={label} />
        ))}
        <Divider />
        <Styled.ButtonWraper>
          <Button onClick={props.hideLabels}>Done</Button>
        </Styled.ButtonWraper>
      </Styled.MainContainer>
    </Model>
  );
}
