import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ViewStreamRoundedIcon from "@material-ui/icons/ViewStreamRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import Profile from "./Profile";
import * as Styled from "../styles/appHeader.styled";

export default function AppHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeProfile = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" style={{ zIndex: 2 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Styled.Logo />
        <Styled.SearchBar onChange={props.filterSearchedNotes} />
        <Styled.HeaderOptions>
          <IconButton>
            <Styled.StyledSearchIcon />
          </IconButton>
          <Styled.ReponsiveIconButton onClick={props.changeLayout}>
            {props.isGrid ? (
              <ViewStreamRoundedIcon />
            ) : (
              <DashboardRoundedIcon />
            )}
          </Styled.ReponsiveIconButton>
          <Avatar
            src={props.imageUrl}
            alt={props.firstLetter}
            onClick={openProfile}
            style={{ cursor: "pointer" }}
          ></Avatar>
          <Popover
            open={anchorEl}
            anchorEl={anchorEl}
            onClose={closeProfile}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Profile
              imageUrl={props.imageUrl}
              firstLetter={props.firstLetter}
              user={props.user}
              upDateProfileImage={props.upDateProfileImage}
            />
          </Popover>
        </Styled.HeaderOptions>
      </Toolbar>
    </AppBar>
  );
}
