import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import FormCheckbox from "./FormCheckbox";
import * as Styled from "../styles/collaborate.styled";
import { searchUserList } from "../services/notesServices";

export default function Collaborate(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [collaborators, setCollaborators] = React.useState([]);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setCollaborators([]);
    setAnchorEl(null);
  };

  const searchUsers = (event) => {
    var value = event.target.value;
    if (value) {
      let data = { searchWord: value };
      searchUserList(data, props.token).then((response) => {
        if (response.data.data.success)
          setCollaborators(response.data.data.details);
      });
    } else setCollaborators([]);
  };
  return (
    <>
      <IconButton {...props} onClick={openMenu}>
        <GroupAddOutlinedIcon />
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        open={anchorEl}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <Styled.MainContainer>
          <Typography variant="h6" align="left">
            add collaborators :
          </Typography>
          <Styled.SearchContainer>
            <Styled.Input
              placeholder="search"
              autoFocus
              onChange={searchUsers}
            />
          </Styled.SearchContainer>
          <Styled.LabelsContainer>
            {collaborators.map((collaborator) => (
              <FormCheckbox label={collaborator.email} />
            ))}
          </Styled.LabelsContainer>
        </Styled.MainContainer>
      </Popover>
    </>
  );
}
