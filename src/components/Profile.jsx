import React from "react";
import Typography from "@material-ui/core/Typography";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import * as Styled from "../styles/profile.styled";

export default function AppHeader(props) {
  return (
    <Styled.ProfileContainer maxWidth="xs">
      <Styled.StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <Styled.SmallAvatar>
            <AddAPhotoOutlinedIcon fontSize="small" />
          </Styled.SmallAvatar>
        }
      >
        <Styled.LargeAvatar
          src={props.imageUrl}
          alt={props.firstLetter}
        ></Styled.LargeAvatar>
      </Styled.StyledBadge>
      <Typography variant="h5" align="center">
        {props.user.firstName + " " + props.user.lastName}
      </Typography>
      <Typography variant="subtitle1" align="center">
        {props.user.email}
      </Typography>
    </Styled.ProfileContainer>
  );
}
