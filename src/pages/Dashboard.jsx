import React from "react";
import Minigrid from "minigrid";
import AppHeader from "../components/AppHeader";
import AddNewNote from "../components/AddNewNote";
import SideNavBar from "../components/SideNavBar";
import * as Styled from "../styles/dashboard.styled";
import { getNotesList } from "../services/notesServices";
import Note from '../components/Note';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false, notes: [], refresh: false, };
  }

  componentDidMount() {
    window.addEventListener("resize", this.fixLayOut);
    let user = JSON.parse(localStorage.getItem("user"));
    this.updateNotes(user.token)
    this.setState({ user: user });
  }
  componentDidUpdate() {
    if(this.state.notes.length>0) 
      this.fixLayOut();
  }
  updateNotes = (token) => {
    getNotesList(token)
      .then((response) => {
        this.setState({notes: response.data.data.data})
      })
      .catch((error) => console.log(error));
  };
  fixLayOut = () => {
    var grid = new Minigrid({
      container: ".notesContainer",
      item: ".note",
      gutter: 15,
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
          imageUrl={
            this.state.user
              ? process.env.API_BASE_URL + this.state.user.imageUrl
              : ""
          }
          firstLetter={
            this.state.user ? this.state.user.email.charAt(0).toUpperCase() : ""
          }
        ></AppHeader>
        <Styled.MainContainer>
          <SideNavBar open={this.state.openMenu} />
          <div style={{ width: "100%" }}>
            <AddNewNote token={this.state.user ? this.state.user.token : ""} />
            <Styled.NotesContainer className="notesContainer">
              {this.state.notes.map(note=><Note note={note}/>)}
            </Styled.NotesContainer>
          </div>
        </Styled.MainContainer>
      </>
    );
  }
}
export default Dashboard;
