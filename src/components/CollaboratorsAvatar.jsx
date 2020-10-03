import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Clear";
import styled from "styled-components";

const Delete = styled(ClearIcon)`
  position: absolute;
  margin: 0.5rem;
  z-index: -1;
  cursor: pointer;
`;
const Wraper = styled.div`
  position: relative;
  display: inline-flex;
  margin: 5px 5px;
  border-radius: 50%;
  &:hover > ${Delete} {
    z-index: 1;
  }
`;

export default function collaboratorAvatar(props) {
  return (
    <Wraper>
      <Avatar
        style={{
          backgroundColor: `rgb(${[1, 2, 3].map(
            (x) => (Math.random() * 256) | 0
          )}, 0.4)`,
        }}
      >
        {props.collaborator.firstName.charAt(0)}
      </Avatar>
      <Delete onClick={() => props.removeCollaborators(props.collaborator)} />
    </Wraper>
  );
}
