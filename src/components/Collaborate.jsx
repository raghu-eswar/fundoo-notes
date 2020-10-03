import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import CollaboratorsAvatar from "./CollaboratorsAvatar";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import FormCheckbox from "./FormCheckbox";
import * as Styled from "../styles/collaborate.styled";
import { searchUserList } from "../services/notesServices";

export default function Collaborate(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [collaborators, setCollaborators] = React.useState(
    props.collaborators ? props.collaborators : []
  );
  const [users, setUsers] = React.useState([]);

  React.useEffect(
    () => setCollaborators(props.collaborators ? props.collaborators : []),
    [props.collaborators]
  );
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setUsers([]);
    setAnchorEl(null);
  };

  const searchUsers = (event) => {
    var value = event.target.value;
    if (value) {
      let data = { searchWord: value };
      searchUserList(data, props.token).then((response) => {
        if (response.data.data.success) setUsers(response.data.data.details);
      });
    } else setUsers([]);
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
          {collaborators.map((collaborator) => (
            <CollaboratorsAvatar
              collaborator={collaborator}
              removeCollaborators={props.removeCollaborators}
            />
          ))}
          <Styled.LabelsContainer>
            {collaborators.length > 0 && (
              <hr size={2} color="gray" width="30%" />
            )}
            {users.map((user) => (
              <FormCheckbox
                label={user.email}
                data={user}
                onCheck={props.addCollaborators}
                onUnCheck={props.removeCollaborators}
                checked={collaborators.some(
                  ({ userId }) => user.userId === userId
                )}
              />
            ))}
          </Styled.LabelsContainer>
        </Styled.MainContainer>
      </Popover>
    </>
  );
}
