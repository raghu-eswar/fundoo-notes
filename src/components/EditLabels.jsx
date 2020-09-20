import React from "react";
import Model from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddLabel from './AddLabel';
import * as Styled from "../styles/editLabels.styled";

export default function EditLabels(props) {

  return (
    <Model open={props.showLabels} onClose={props.hideLabels}>
      <Styled.MainContainer maxWidth="xs">
        <Typography variant="h6" align="left">
          Edit Labels
        </Typography>
        <AddLabel userId={props.userId} token={props.token}/>
        <Divider />
        <Styled.ButtonWraper>
          <Button onClick={props.hideLabels}>Done</Button>
        </Styled.ButtonWraper>
      </Styled.MainContainer>
    </Model>
  );
}
