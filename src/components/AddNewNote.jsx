import React from "react";
import Button from "@material-ui/core/Button";
import PinNote from "./PinNote";
import Reminder from "./Reminder";
import Collaborate from "./Collaborate";
import AddColor from "./AddColor";
import AddImage from "./AddImage";
import ArchiveNote from "./ArchiveNote";
import MoreNoteOptions from "./MoreNoteOptions";
import * as Styled from "../styles/addNewNote.styled";
import { addNotes } from "../services/notesServices";

const reset = () => {
  return {
    title: "",
    description: "",
    isPined: false,
    isArchived: false,
    isDeleted: false,
    reminder: [],
    createdDate: "",
    modifiedDate: "",
    color: "#ffffff",
    label: [],
    imageUrl: "",
    linkUrl: "",
    collaborators: [],
    userId: "",
    collaberator: [],
    labelIdList: [],
    noteCheckLists: [],
    noteLabels: [],
    questionAndAnswerNotes: [],
  };
};

export default function AddNewNote(props) {
  const [open, setOpen] = React.useState(false);
  const [note, setNote] = React.useState(reset());

  const saveNote = () => {
    if (note.title || note.description) {
      let formData = new FormData();
      formData.append("title", note.title);
      formData.append("description", note.description);
      formData.append("color", note.color);
      addNotes(formData, props.token)
        .then((response) => {
          if (response.status === 200) {
            setOpen(false);
            setNote(reset());
            props.updateNotes(props.token);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setOpen(false);
      setNote(reset());
    }
  };

  const addColor = (color) => {
    setNote({ ...note, color: color.hex });
  };

  return (
    <Styled.MainContainer maxWidth="sm" backgroundColor={note.color}>
      <Styled.TitleContainer open={open}>
        <Styled.StyledInput
          placeholder="Title"
          fullWidth
          multiline
          fontSize="1.2rem"
          onChange={(event) => setNote({ ...note, title: event.target.value })}
          value={note.title}
        />
        <PinNote />
      </Styled.TitleContainer>
      <Styled.NoteContainer>
        <Styled.StyledInput
          placeholder="Take a note..."
          fullWidth
          multiline
          onClick={() => setOpen(true)}
          onChange={(event) =>
            setNote({ ...note, description: event.target.value })
          }
          value={note.description}
        />
        <AddImage style={{ display: open ? "none" : "inline-flex" }} />
      </Styled.NoteContainer>
      <Styled.OptionsContainer open={open}>
        <Reminder />
        <Collaborate />
        <AddColor addColor={addColor} />
        <AddImage />
        <ArchiveNote />
        <MoreNoteOptions />
        <Styled.CloseButton>
          <Button onClick={saveNote}>Close</Button>
        </Styled.CloseButton>
      </Styled.OptionsContainer>
    </Styled.MainContainer>
  );
}
