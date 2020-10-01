import React from "react";
import Minigrid from "minigrid";
import Divider from "@material-ui/core/Divider";
import AppHeader from "../components/AppHeader";
import AddNewNote from "../components/AddNewNote";
import SideNavBar from "../components/SideNavBar";
import UpdateNote from "../components/UpdateNote";
import Note from "../components/Note";
import EditLabels from "../components/EditLabels";
import Loader from "../components/Loader";
import * as Styled from "../styles/dashboard.styled";
import { menuOptions } from "../enumeration/menuOptions";
import { getNotesList, getNoteLabelList } from "../services/notesServices";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      notes: [],
      refresh: false,
      noteToUpdate: null,
      selectedMenuOption: menuOptions.NOTES,
      isGrid: true,
      showLabels: false,
      labels: [],
      isLoading: false,
      activeNotesList: [],
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.fixLayOut);
    let user = JSON.parse(localStorage.getItem("user"));
    this.updateNotes(user.token, true);
    this.setState({ user: user });
    this.updateLabels(user.token);
  }
  componentDidUpdate() {
    this.fixLayOut();
    setTimeout(this.fixLayOut, 100);
    if (this.unPinedGrid.children.length <= 0)
      this.unPinedGrid.style.height = "0px";
    if (this.pinedGrid.children.length <= 0)
      this.pinedGrid.style.height = "0px";
  }

  updateLabels = (token) => {
    getNoteLabelList(token)
      .then((response) => {
        if (response.data.data.success)
          this.setState({ labels: response.data.data.details });
      })
      .catch((error) => console.log(error));
  };

  updateNotes = (token) => {
    this.setState({ isLoading: true });
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
          note.labelIdList = note.noteLabels.map((label) => label.id);
        });
        this.setState({ notes: notes, isLoading: false }, () => {
          this.selectMenuOption(this.state.selectedMenuOption);
        });
      })
      .catch((error) => console.log(error));
  };
  fixLayOut = () => {
    if (this.state.activeNotesList.length > 0) {
      let unPinedGrid = new Minigrid({
        container: ".notesContainer",
        item: ".note",
        gutter: 25,
      });
      let pinedGrid = new Minigrid({
        container: ".pinedNotesContainer",
        item: ".pinedNote",
        gutter: 25,
      });
      unPinedGrid.mount();
      pinedGrid.mount();
    }
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
  selectMenuOption = (selectedMenuOption) => {
    let activeNotesList = [];
    if (selectedMenuOption === menuOptions.EDIT_LABELS) {
      this.setState({ showLabels: true });
      return;
    }
    switch (selectedMenuOption) {
      case menuOptions.NOTES:
        activeNotesList = this.state.notes.filter(
          (note) => !note.isArchived && !note.isDeleted
        );
        break;
      case menuOptions.REMINDERS:
        activeNotesList = this.state.notes.filter(
          (note) => note.reminder.length > 0 && !note.isDeleted
        );
        break;
      case menuOptions.ARCHIVE:
        activeNotesList = this.state.notes.filter(
          (note) => note.isArchived && !note.isDeleted
        );
        break;
      case menuOptions.TRASH:
        activeNotesList = this.state.notes.filter((note) => note.isDeleted);
        break;
      default:
        break;
    }
    this.setState({
      selectedMenuOption: selectedMenuOption,
      activeNotesList: activeNotesList,
    });
  };
  upDateProfileImage = (imageUrl) => {
    let user = this.state.user;
    user.imageUrl = imageUrl;
    this.setState({ user: user });
    localStorage.setItem("user", JSON.stringify(user));
  };
  render() {
    return (
      <>
        <AppHeader
          handleDrawerOpen={this.handleDrawerOpen}
          isGrid={this.state.isGrid}
          changeLayout={() => this.setState({ isGrid: !this.state.isGrid })}
          user={this.state.user}
          upDateProfileImage={this.upDateProfileImage}
          imageUrl={
            this.state.user
              ? process.env.REACT_APP_API_BASE_URL +
                "/" +
                this.state.user.imageUrl
              : ""
          }
          firstLetter={
            this.state.user ? this.state.user.email.charAt(0).toUpperCase() : ""
          }
        ></AppHeader>
        <Styled.MainContainer>
          <SideNavBar
            open={this.state.openMenu}
            selectedMenuOption={this.state.selectedMenuOption}
            selectMenuOption={this.selectMenuOption}
            labels={this.state.labels}
          />
          <div style={{ width: "100%" }}>
            {(this.state.selectedMenuOption === menuOptions.NOTES ||
              this.state.selectedMenuOption === menuOptions.REMINDERS) && (
              <AddNewNote
                token={this.state.user ? this.state.user.token : ""}
                updateNotes={this.updateNotes}
                labels={this.state.labels}
              />
            )}
            <Styled.NotesContainer>
              <div
                className="pinedNotesContainer"
                style={{ margin: "auto" }}
                ref={(element) => (this.pinedGrid = element)}
              >
                {this.state.activeNotesList
                  .filter((note) => note.isPined)
                  .map((note) => (
                    <Note
                      note={note}
                      openNote={this.openNote}
                      token={this.state.user ? this.state.user.token : ""}
                      updateNotes={this.updateNotes}
                      isGrid={this.state.isGrid}
                      labels={this.state.labels}
                    />
                  ))}
              </div>
              {this.state.activeNotesList.filter((note) => note.isPined)
                .length > 0 && <Divider />}
              <div
                className="notesContainer"
                style={{ margin: "auto" }}
                ref={(element) => (this.unPinedGrid = element)}
              >
                {this.state.activeNotesList
                  .filter((note) => !note.isPined)
                  .map((note) => (
                    <Note
                      note={note}
                      openNote={this.openNote}
                      token={this.state.user ? this.state.user.token : ""}
                      updateNotes={this.updateNotes}
                      isGrid={this.state.isGrid}
                      labels={this.state.labels}
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
          labels={this.state.labels}
        />
        <EditLabels
          userId={this.state.user && this.state.user.userId}
          token={this.state.user && this.state.user.token}
          showLabels={this.state.showLabels}
          hideLabels={() => this.setState({ showLabels: false })}
          updateLabels={this.updateLabels}
          labels={this.state.labels}
        />
        <Loader open={this.state.isLoading} />
      </>
    );
  }
}
export default Dashboard;
