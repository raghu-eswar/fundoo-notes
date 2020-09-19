import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ViewStreamRoundedIcon from "@material-ui/icons/ViewStreamRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import Avatar from "@material-ui/core/Avatar";
import * as Styled from "../styles/appHeader.styled";

export default function AppHeader(props) {
  return (
    <AppBar position="sticky" style={{ zIndex: 1 }}>
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
        <Styled.SearchBar />
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
          <Avatar src={props.imageUrl} alt={props.firstLetter}></Avatar>
        </Styled.HeaderOptions>
      </Toolbar>
    </AppBar>
  );
}
