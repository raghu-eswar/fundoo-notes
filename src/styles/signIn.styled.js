import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

export const MainContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LogInForm = styled.form`
  width: 85%;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FormError = styled.span`
  font-size: 0.8rem;
  text-transform: capitalize;
  color: red;
`;
const ButtonWraper = styled.span`
  margin: 1rem;
`;
const AvatarWrapper = styled.div`
  .MuiAvatar-root {
    background-color: gold;
    width: 6rem;
    height: 6rem;
    margin: 1rem;
  }
  .MuiSvgIcon-root {
    font-size: 4rem;
  }
`;
export const StyledButton = (props) => (
  <ButtonWraper>
    <Button {...props}></Button>
  </ButtonWraper>
);
export const StyledAvatar = (props) => (
  <AvatarWrapper>
    <Avatar {...props} />
  </AvatarWrapper>
);
