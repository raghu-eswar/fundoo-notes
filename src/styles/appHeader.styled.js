import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
  &:hover .MuiInputBase-input,
  .MuiInputBase-input:focus {
    color: black;
  }
  .MuiInputBase-root .MuiInputBase-input:focus {
    background-color: rgba(255, 255, 255);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;
const LogoContainer = styled.div`
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h1 {
    background: linear-gradient(to bottom right, #fee440, #9b5de5, red);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: bolder;
    font-size: 1.6rem;
    text-shadow: 3px 1px rgba(0, 0, 0, 0.1), 3px 1px rgba(0, 0, 0, 0.39);
  }
`;
const Icon = styled(FiberManualRecordIcon)`
  margin: 5px 10px 5px 5px;
  font-size: xx-large;
  color: #f15bb5;
  filter: drop-shadow(0px 0px 1px #000) drop-shadow(0px 9px 2px #ffffff)
    drop-shadow(-9px -4px 0px #9b5de5) drop-shadow(9px -4px 0px #fee440);
`;
export const SearchBar = (props) => (
  <SearchContainer>
    <SearchIconContainer>
      <SearchIcon></SearchIcon>
    </SearchIconContainer>
    <SearchInputWraper>
      <InputBase placeholder="Search.." onChange={props.onChange}></InputBase>
    </SearchInputWraper>
  </SearchContainer>
);
export const Logo = () => (
  <LogoContainer>
    <Icon />
    <Typography component="h1" color="inherit" noWrap>
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
  &.MuiIconButton-root {
    color: #ffffff;
  }
  @media (max-width: 350px) {
    display: none;
  }
`;
