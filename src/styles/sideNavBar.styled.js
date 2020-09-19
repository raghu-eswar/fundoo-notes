import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

export const SideDrawNav = styled(Drawer)`
  position: fixed;
  white-space: nowrap;
  z-index: 1;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "240px" : "60px")};
  @media (max-width: 500px) {
    width: ${(props) => (props.isOpen ? "240px" : "0px")};
  }
  .MuiDrawer-paper {
    position: relative;
    overflow-x: hidden;
    z-index: 0;
  }
  .MuiListItem-root {
    border-top-right-radius: ${(props) => (props.isOpen ? "25px" : 0)};
    border-bottom-right-radius: ${(props) => (props.isOpen ? "25px" : 0)};
  }
  .MuiListItem-button:hover {
    background-color: rgb(238, 232, 170);
  }
  .Mui-selected {
    background-color: rgb(240, 230, 140);
  }
`;
