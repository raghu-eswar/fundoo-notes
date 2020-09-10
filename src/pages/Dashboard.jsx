import React from "react";
import Minigrid from "minigrid";
import AppHeader from "../components/AppHeader";
import AddNewNote from "../components/AddNewNote";
import SideNavBar from "../components/SideNavBar";
import * as Styled from "../styles/dashboard.styled";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false, notes: [] };
  }

  componentDidMount() {
    this.fixLayOut();
    window.addEventListener("resize", this.fixLayOut);
  }

  fixLayOut = () => {
    var grid = new Minigrid({
      container: ".notesContainer",
      item: ".card",
      gutter: 12,
    });
    grid.mount();
  };

  handleDrawerOpen = () => {
    this.setState({ openMenu: !this.state.openMenu });
    setTimeout(this.fixLayOut, 0);
  };
  render() {
    return (
      <>
        <AppHeader
          handleDrawerOpen={this.handleDrawerOpen}
          isGrid
          imageUrl="/"
          firstLetter="R"
        ></AppHeader>
        <Styled.MainContainer>
          <SideNavBar open={this.state.openMenu} />
          <div style={{ width: "100%" }}>
            <AddNewNote />
            <Styled.NotesContainer className="notesContainer"></Styled.NotesContainer>
          </div>
        </Styled.MainContainer>
      </>
    );
  }
}
export default Dashboard;
