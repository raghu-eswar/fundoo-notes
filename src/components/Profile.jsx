import React from "react";
import Typography from "@material-ui/core/Typography";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import * as Styled from "../styles/profile.styled";
import { uploadProfileImage } from "../services/userServices";

export default function AppHeader(props) {
  const imageInput = React.useRef();

  const loadImage = () => {
    let formData = new FormData();
    formData.append("file", imageInput.current.files[0]);
    uploadProfileImage(formData, props.user.token)
      .then((response) => {
        if (response.data.status.success)
          props.upDateProfileImage(response.data.status.imageUrl);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Styled.ProfileContainer maxWidth="xs">
      <Styled.StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <Styled.SmallAvatar onClick={() => imageInput.current.click()}>
            <AddAPhotoOutlinedIcon fontSize="small" />
          </Styled.SmallAvatar>
        }
      >
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={imageInput}
          onChange={loadImage}
        ></input>
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
