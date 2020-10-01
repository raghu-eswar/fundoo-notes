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
import ReminderChip from "./ReminderChip";
import SketchTool from "./SketchTool";
import SketchBoard from "./SketchBoard.jsx";
import DisplaySketchBoard from "./DisplaySketchBoard";
import LabelChip from "./LabelChip";
import * as Styled from "../styles/updateNote.styled";
import {
  updateNotes,
  changeNoteColor,
  pinUnpinNotes,
  archiveNotes,
  trashNotes,
  addUpdateReminderNotes,
  removeReminderNotes,
} from "../services/notesServices";

export default function UpdateNote(props) {
  const [open, setOpen] = React.useState(props.open);
  const [note, setNote] = React.useState(props.note);
  const [update, setUpdate] = React.useState(false);
  const [openSketchBoard, setOpenSketchBoard] = React.useState(false);

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
      props.note.description !== note.description ||
      props.note.drawing !== note.drawing
    ) {
      let formData = new FormData();
      formData.append("noteId", note.id);
      formData.append("title", note.title);
      if (note.drawing.objects.length > 0) {
        let description =
          note.description + " $SKETCH" + JSON.stringify(note.drawing);
        formData.append("description", description);
      } else formData.append("description", note.description);
      updateNotes(formData, props.token).then((response) => {
        if (response.status === 200) {
          props.closeNote();
          props.updateNotes(props.token);
        }
      });
    } else props.closeNote();
    if (update) props.updateNotes(props.token);
  };
  const togglePin = () => {
    setNote({ ...note, isPined: !note.isPined });
    let data = { isPined: !note.isPined, noteIdList: [note.id] };
    pinUnpinNotes(data, props.token).then(
      (response) => response.data.data.success && setUpdate(true)
    );
  };
  const toggleArchive = () => {
    setNote({ ...note, isArchived: !note.isArchived });
    let data = { isArchived: !note.isArchived, noteIdList: [note.id] };
    archiveNotes(data, props.token).then(
      (response) => response.data.data.success && setUpdate(true)
    );
  };
  const deleteNote = () => {
    let data = { isDeleted: !note.isDeleted, noteIdList: [note.id] };
    trashNotes(data, props.token).then((response) => {
      if (response.data.data.success) {
        props.closeNote();
        props.updateNotes(props.token);
      }
    });
  };

  const addReminder = (reminder) => {
    setNote({ ...note, reminder: [reminder] });
    let data = { reminder: reminder, noteIdList: [note.id] };
    addUpdateReminderNotes(data, props.token).then(
      (response) => response.data.data.success && setUpdate(true)
    );
  };
  const removeReminder = (reminder) => {
    setNote({ ...note, reminder: [] });
    let data = { noteIdList: [note.id] };
    removeReminderNotes(data, props.token).then(
      (response) => response.data.data.success && setUpdate(true)
    );
  };

  const setDrawing = (drawing) => {
    setNote({ ...note, drawing: drawing });
  };

  return (
    <>
      <Modal
        open={open}
        style={{
          margin:
            open && note.drawing.objects.length > 0 ? "auto" : "12rem auto",
          border: "none",
        }}
        onClose={saveNote}
      >
        <Styled.MainContainer
          maxWidth="sm"
          backgroundColor={open && note.color}
        >
          {open && note.drawing.objects.length > 0 && (
            <Styled.SketchBoardContainer>
              <DisplaySketchBoard
                width={304}
                height={284}
                drawing={note.drawing}
                zoom={0.55}
                openSketchBoard={() => setOpenSketchBoard(true)}
              />
            </Styled.SketchBoardContainer>
          )}
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
            <PinNote isPined={open && note.isPined} togglePin={togglePin} />
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
          </Styled.NoteContainer>
          {open && note.reminder.length > 0 && (
            <ReminderChip
              reminder={note.reminder[0]}
              deleteReminder={removeReminder}
            />
          )}
          {open && note.noteLabels.map((label) => (
            <LabelChip label={label} />
          ))}
          <Styled.OptionsContainer>
            <Reminder
              addReminder={addReminder}
              reminder={open && note.reminder[0]}
            />
            <Collaborate />
            <AddColor
              addColor={addColor}
              onPickerClose={saveColor}
              color={open && note.color}
            />
            <AddImage />
            <ArchiveNote
              isArchived={open && note.isArchived}
              toggleArchive={toggleArchive}
            />
            <SketchTool openSketchBoard={() => setOpenSketchBoard(true)} />
            <MoreNoteOptions deleteNote={deleteNote} />
            <Styled.CloseButton>
              <Button onClick={saveNote}>Close</Button>
            </Styled.CloseButton>
          </Styled.OptionsContainer>
        </Styled.MainContainer>
      </Modal>
      <Modal open={openSketchBoard} onClose={() => setOpenSketchBoard(false)}>
        <SketchBoard
          drawing={open && note.drawing}
          setDrawing={setDrawing}
          close={() => setOpenSketchBoard(false)}
        />
      </Modal>
    </>
  );
}
