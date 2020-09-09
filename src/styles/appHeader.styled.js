import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import SportsVolleyballRoundedIcon from "@material-ui/icons/SportsVolleyballRounded";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const SearchContainer = styled.div`
  width: 60%;
  position: relative;
  margin-left: 3rem;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    background-color: rgba(255, 255, 255);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  &:hover > div {
    color: black;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
const SearchIconContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 16px;
  cursor: pointer;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;
const SearchInputWraper = styled.span`
  .MuiInputBase-root {
    color: inherit;
    width: 100%;
  }
  .MuiInputBase-input {
    width: 100%;
    padding: 8px 8px 8px 0px;
    padding-left: calc(1em + 32px);
  }
  &:hover .MuiInputBase-input {
    color: black;
  }
`;
const LogoContainer = styled.div`
  width: 15rem;
  display: flex;
  align-items: center;
`;
const Icon = styled(SportsVolleyballRoundedIcon)`
  margin: 5px;
  font-size: xx-large;
`;
export const SearchBar = () => (
  <SearchContainer>
    <SearchIconContainer>
      <SearchIcon></SearchIcon>
    </SearchIconContainer>
    <SearchInputWraper>
      <InputBase placeholder="Search.."></InputBase>
    </SearchInputWraper>
  </SearchContainer>
);
export const Logo = () => (
  <LogoContainer>
    <Icon />
    <Typography component="h1" variant="h6" color="inherit" noWrap>
      fundooNotes
    </Typography>
  </LogoContainer>
);
export const HeaderOptions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const StyledSearchIcon = styled(SearchIcon)`
  display: none;
  color: white;
  @media (max-width: 560px) {
    display: block;
  }
`;
export const ReponsiveIconButton = styled(IconButton)`
  color: white;
  @media (max-width: 350px) {
    display: none;
  }
`;
