import styled, { keyframes } from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";

const ripple = keyframes`
  0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
`;
export const ProfileContainer = styled(Container)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;
export const LargeAvatar = styled(Avatar)`
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
`;
export const SmallAvatar = styled(Avatar)`
  width: 1.4rem;
  height: 1.4rem;
  font-size: 1rem;
  background-color: #ffffff;
  cursor: pointer;
  .MuiSvgIcon-root {
    fill: #3f51b5;
    font-size: 1rem;
  }
`;
export const StyledBadge = styled(Badge)`
  margin-bottom: 1.5rem;
  &:after {
    position: absolute;
    top: 81%;
    left: 80%;
    width: 10%;
    height: 10%;
    border-radius: 50%;
    animation: ${ripple} 1.2s infinite ease-in-out;
    border: 1px solid #3f51b5;
    content: "";
  }
`;
