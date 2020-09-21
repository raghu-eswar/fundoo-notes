import React from "react";
import Model from "@material-ui/core/Modal";
import styled, { keyframes } from "styled-components";

const Loading = keyframes`
    0% { transform: scale(0.0); background-color: #ffbe0b; }
    25% {background-color: #fb5607}
    50% {background-color: #ff006e; transform: scale(1);}
    75%{background-color: #8338ec}
    100% { transform: scale(0.0)  rotateY(180deg); background-color: #3a86ff;}
`;

const Container = styled.div`
  outline: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  column-gap: 5px;
  width: 100px;
  height: 100px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    background: white;
    transform: scale(0);
    transform-origin: center center;
    animation: ${Loading} 1.5s infinite linear;
    border-radius: 5px;

    &:nth-child(1),
    &:nth-child(5),
    &:nth-child(9) {
      animation-delay: 0.4s;
    }
    &:nth-child(4),
    &:nth-child(8) {
      animation-delay: 0.2s;
    }
    &:nth-child(2),
    &:nth-child(6) {
      animation-delay: 0.6s;
    }
    &:nth-child(3) {
      animation-delay: 0.8s;
    }
  }
`;

const StyledModel = styled(Model)`
  display: flex;
  align-items: center;
  justify-content: center;
  & > div:first-child {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
`;

export default function Loader(props) {
  return (
    <StyledModel open={props.open}>
      <Container>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Container>
    </StyledModel>
  );
}
