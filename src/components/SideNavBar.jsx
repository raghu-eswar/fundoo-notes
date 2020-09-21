import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuListItems from "./MenuListItems";
import * as Styled from "../styles/sideNavBar.styled";

export default function SideNavBar(props) {
  const [open, setOpen] = React.useState(props.open);
  React.useEffect(() => setOpen(props.open), [props.open]);
  return (
    <Styled.SideDrawNav variant="permanent" isOpen={open}>
      <List>
        <MenuListItems
          selectedMenuIndex={props.selectedMenuIndex}
          selectMenuOption={props.selectMenuOption}
          labels={props.labels}
        />
      </List>
      <Divider />
    </Styled.SideDrawNav>
  );
}
