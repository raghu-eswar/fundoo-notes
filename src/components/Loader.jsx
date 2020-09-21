import React from "react";
import Model from "@material-ui/core/Modal";
import styled, { keyframes } from "styled-components";

const Loading = keyframes`
    0%{transform: rotate(90deg) translateX(40px);  visibility: visible;}
    5%{background-color: #ffd700;}
    10%{background-color: #8b0000;}
    15%{background-color: #8a2be2;}
    20%{background-color: #00ffff;}
    25%{background-color: #ffa500;}
    30%{background-color: #008000;}
    35%{background-color: #ff00bf;}
    40%{background-color: #800080;}
    50%{transform: rotate(2160deg) translateX(80px);}
    55%{background-color: #ffd700;}
    60%{background-color: #8b0000;}
    65%{background-color: #8a2be2;}
    70%{background-color: #00ffff;}
    75%{background-color: #ffa500;}
    85%{background-color: #7fff00;}
    100%{background-color: #ffd700;}
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  background-color: #0000ff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  visibility: hidden;
  animation: ${Loading} 10s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const StyledModel = styled(Model)`
  & > div {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
`;

export default function Loader(props) {
  return (
    <StyledModel open={props.open}>
      <>
        <Dot delay={"0s"}></Dot>
        <Dot delay={"0.3s"}></Dot>
        <Dot delay={"0.6s"}></Dot>
        <Dot delay={"0.9s"}></Dot>
        <Dot delay={"1.2s"}></Dot>
        <Dot delay={"1.5s"}></Dot>
        <Dot delay={"1.8s"}></Dot>
        <Dot delay={"2.1s"}></Dot>
        <Dot delay={"2.4s"}></Dot>
        <Dot delay={"2.7s"}></Dot>
      </>
    </StyledModel>
  );
}
