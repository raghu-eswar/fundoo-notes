import React from "react";
import Minigrid from "minigrid";
import Divider from "@material-ui/core/Divider";
import AppHeader from "../components/AppHeader";
import AddNewNote from "../components/AddNewNote";
import SideNavBar from "../components/SideNavBar";
import UpdateNote from "../components/UpdateNote";
import Note from "../components/Note";
import * as Styled from "../styles/dashboard.styled";
import { getNotesList } from "../services/notesServices";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      notes: [],
      refresh: false,
      noteToUpdate: null,
      selectedMenuIndex: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.fixLayOut);
    let user = JSON.parse(localStorage.getItem("user"));
    this.updateNotes(user.token);
    this.setState({ user: user });
  }
  componentDidUpdate() {
    this.fixLayOut();
    setTimeout(this.fixLayOut, 100);
    if (this.unPinedGrid.children.length <= 0)
      this.unPinedGrid.style.height = "0px";
    if (this.pinedGrid.children.length <= 0)
      this.pinedGrid.style.height = "0px";
  }
  updateNotes = (token) => {
    getNotesList(token)
      .then((response) => {
        let notes = response.data.data.data;
        notes.forEach((note) => {
          let descriptionArray = note.description.split("$SKETCH");
          if (descriptionArray.length > 1) {
            let drawing = descriptionArray.pop();
            let description = descriptionArray.join("$SKETCH");
            note.description = description;
            note.drawing = JSON.parse(drawing);
          } else {
            let description = descriptionArray.join("$SKETCH");
            note.description = description;
            note.drawing = { backgroundColor: "transparent", objects: [] };
          }
        });
        this.setState({ notes: notes });
      })
      .catch((error) => console.log(error));
  };
  fixLayOut = () => {
    let unPinedGrid = new Minigrid({
      container: ".notesContainer",
      item: ".note",
      gutter: 15,
    });
    let pinedGrid = new Minigrid({
      container: ".pinedNotesContainer",
      item: ".pinedNote",
      gutter: 15,
    });
    unPinedGrid.mount();
    pinedGrid.mount();
  };

  handleDrawerOpen = () => {
    this.setState({ openMenu: !this.state.openMenu });
    setTimeout(this.fixLayOut, 0);
  };
  openNote = (note) => {
    if (!note.isDeleted) this.setState({ noteToUpdate: note });
  };
  closeNote = () => {
    this.setState({ noteToUpdate: null });
  };
  selectMenuOption = (selectedMenuIndex) => {
    if (this.state.selectedMenuIndex !== selectedMenuIndex)
      this.setState({ selectedMenuIndex: selectedMenuIndex });
  };

  render() {
    let displayNotesList = [];
    if (this.state.notes.length > 0) {
      switch (this.state.selectedMenuIndex) {
        case 0:
          displayNotesList = this.state.notes.filter(
            (note) => !note.isArchived && !note.isDeleted
          );
          break;
        case 1:
          displayNotesList = this.state.notes.filter(
            (note) => note.reminder.length > 0 && !note.isDeleted
          );
          break;
        case 3:
          displayNotesList = this.state.notes.filter(
            (note) => note.isArchived && !note.isDeleted
          );
          break;
        case 4:
          displayNotesList = this.state.notes.filter((note) => note.isDeleted);
          break;
        default:
          break;
      }
    }
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
          <SideNavBar
            open={this.state.openMenu}
            selectedMenuIndex={this.state.selectedMenuIndex}
            selectMenuOption={this.selectMenuOption}
          />
          <div style={{ width: "100%" }}>
            {(this.state.selectedMenuIndex === 0 ||
              this.state.selectedMenuIndex === 1) && (
              <AddNewNote
                token={this.state.user ? this.state.user.token : ""}
                updateNotes={this.updateNotes}
              />
            )}
            <Styled.NotesContainer>
              <div
                className="pinedNotesContainer"
                style={{ margin: "auto" }}
                ref={(element) => (this.pinedGrid = element)}
              >
                {displayNotesList
                  .filter((note) => note.isPined)
                  .map((note) => (
                    <Note
                      note={note}
                      openNote={this.openNote}
                      token={this.state.user ? this.state.user.token : ""}
                      updateNotes={this.updateNotes}
                    />
                  ))}
              </div>
              {displayNotesList.filter((note) => note.isPined).length > 0 && (
                <Divider />
              )}
              <div
                className="notesContainer"
                style={{ margin: "auto" }}
                ref={(element) => (this.unPinedGrid = element)}
              >
                {displayNotesList
                  .filter((note) => !note.isPined)
                  .map((note) => (
                    <Note
                      note={note}
                      openNote={this.openNote}
                      token={this.state.user ? this.state.user.token : ""}
                      updateNotes={this.updateNotes}
                    />
                  ))}
              </div>
            </Styled.NotesContainer>
          </div>
        </Styled.MainContainer>
        <UpdateNote
          open={this.state.noteToUpdate !== null}
          note={this.state.noteToUpdate}
          token={this.state.user ? this.state.user.token : ""}
          closeNote={this.closeNote}
          updateNotes={this.updateNotes}
        />
      </>
    );
  }
}
export default Dashboard;
