import React from "react";
import Button from "@material-ui/core/Button";
import PinNote from "./PinNote";
import Reminder from "./Reminder";
import Collaborate from "./Collaborate";
import AddColor from "./AddColor";
import AddImage from "./AddImage";
import ArchiveNote from "./ArchiveNote";
import MoreNoteOptions from "./MoreNoteOptions";
import Modal from "@material-ui/core/Modal";
import * as Styled from "../styles/updateNote.styled";
import { updateNotes, changeNoteColor } from "../services/notesServices";

export default function UpdateNote(props) {
  const [open, setOpen] = React.useState(props.open);
  const [note, setNote] = React.useState(props.note);
  const [update, setUpdate] = React.useState(false);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  React.useEffect(() => {
    setNote(props.note);
  }, [props.note]);

  const addColor = (color) => {
    setNote({ ...note, color: color.hex });
    setUpdate(true);
  };

  const saveColor = () => {
    let data = { color: note.color, noteIdList: [note.id] };
    changeNoteColor(data, props.token);
  };

  const saveNote = () => {
    if (
      props.note.title !== note.title ||
      props.note.description !== note.description
    ) {
      let formData = new FormData();
      formData.append("noteId", note.id);
      formData.append("title", note.title);
      formData.append("description", note.description);
      updateNotes(formData, props.token).then((response) => {
        if (response.status === 200) {
          props.closeNote();
          props.updateNotes(props.token);
        }
      });
    } else props.closeNote();
    if (update) props.updateNotes(props.token);
  };
  return (
    <Modal
      open={open}
      style={{ margin: "12rem auto", border: "none" }}
      onClose={saveNote}
    >
      <Styled.MainContainer maxWidth="sm" backgroundColor={open && note.color}>
        <Styled.TitleContainer>
          <Styled.StyledInput
            placeholder="Title"
            fullWidth
            multiline
            fontSize="1.2rem"
            onChange={(event) =>
              setNote({ ...note, title: event.target.value })
            }
            value={open && note.title}
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
            value={open && note.description}
          />
          <AddImage style={{ display: open ? "none" : "inline-flex" }} />
        </Styled.NoteContainer>
        <Styled.OptionsContainer>
          <Reminder />
          <Collaborate />
          <AddColor addColor={addColor} onPickerClose={saveColor} />
          <AddImage />
          <ArchiveNote />
          <MoreNoteOptions />
          <Styled.CloseButton>
            <Button onClick={saveNote}>Close</Button>
          </Styled.CloseButton>
        </Styled.OptionsContainer>
      </Styled.MainContainer>
    </Modal>
  );
}
