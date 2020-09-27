import React from "react";
import Button from "@material-ui/core/Button";
import PinNote from "./PinNote";
import Reminder from "./Reminder";
import Collaborate from "./Collaborate";
import AddColor from "./AddColor";
import AddImage from "./AddImage";
import ArchiveNote from "./ArchiveNote";
import MoreNoteOptions from "./MoreNoteOptions";
import ReminderChip from "./ReminderChip";
import LabelChip from "./LabelChip";
import SketchTool from "./SketchTool";
import SketchBoard from "./SketchBoard.jsx";
import DisplaySketchBoard from "./DisplaySketchBoard";
import Modal from "@material-ui/core/Modal";
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
  const [openSketchBoard, setOpenSketchBoard] = React.useState(false);
  const [drawing, setDrawing] = React.useState({
    backgroundColor: "transparent",
    objects: [],
  });
  const [note, setNote] = React.useState(reset());

  const saveNote = () => {
    if (note.title || note.description || drawing.objects.length > 0) {
      let formData = new FormData();
      formData.append("title", note.title);
      formData.append("color", note.color);
      formData.append("isPined", note.isPined);
      formData.append("isArchived", note.isArchived);
      formData.append("labelIdList", JSON.stringify(note.labelIdList));
      if (drawing.objects.length > 0) {
        let description =
          note.description + " $SKETCH" + JSON.stringify(drawing);
        formData.append("description", description);
      } else formData.append("description", note.description);
      note.reminder.length > 0 && formData.append("reminder", note.reminder[0]);
      addNotes(formData, props.token)
        .then((response) => {
          if (response.status === 200) {
            setOpen(false);
            setNote(reset());
            setDrawing({ backgroundColor: "transparent", objects: [] });
            props.updateNotes(props.token);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setOpen(false);
      setNote(reset());
      setDrawing({ backgroundColor: "transparent", objects: [] });
    }
  };

  const addColor = (color) => {
    setNote({ ...note, color: color.hex });
  };

  const togglePin = () => {
    setNote({ ...note, isPined: !note.isPined });
  };
  const toggleArchive = () => {
    setNote({ ...note, isArchived: !note.isArchived });
  };
  const addReminder = (reminder) => {
    setNote({ ...note, reminder: [reminder] });
  };
  const removeReminder = () => {
    setNote({ ...note, reminder: [] });
  };
  const addLabels = (label) => {
    setNote({
      ...note,
      noteLabels: [...note.noteLabels, label],
      labelIdList: [...note.labelIdList, label.id],
    });
  };
  const removeLabels = (label) => {
    let index = note.labelIdList.indexOf(label.id);
    let oldNoteLabels = note.noteLabels;
    let oldLabelIdList = note.labelIdList;
    oldNoteLabels.splice(index, 1);
    oldLabelIdList.splice(index, 1);
    setNote({ ...note, labelIdList: oldLabelIdList, noteLabels: oldNoteLabels });
  };

  return (
    <>
      <Styled.MainContainer maxWidth="sm" backgroundColor={note.color}>
        {open && drawing.objects.length > 0 && (
          <Styled.SketchBoardContainer>
            <DisplaySketchBoard
              width={304}
              height={284}
              drawing={drawing}
              zoom={0.55}
              openSketchBoard={() => setOpenSketchBoard(true)}
            />
          </Styled.SketchBoardContainer>
        )}
        <Styled.TitleContainer open={open}>
          <Styled.StyledInput
            placeholder="Title"
            fullWidth
            multiline
            fontSize="1.2rem"
            onChange={(event) =>
              setNote({ ...note, title: event.target.value })
            }
            value={note.title}
          />
          <PinNote isPined={note.isPined} togglePin={togglePin} />
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
        {open && note.reminder.length > 0 && (
          <ReminderChip
            reminder={note.reminder[0]}
            deleteReminder={removeReminder}
          />
        )}
        {open &&
          note.noteLabels.map((label) => (
            <LabelChip label={label} removeLabels={removeLabels} />
          ))}
        <Styled.OptionsContainer open={open}>
          <Reminder addReminder={addReminder} reminder={note.reminder[0]} />
          <Collaborate />
          <AddColor addColor={addColor} color={note.color} />
          <AddImage />
          <ArchiveNote
            isArchived={note.isArchived}
            toggleArchive={toggleArchive}
          />
          <SketchTool openSketchBoard={() => setOpenSketchBoard(true)} />
          <MoreNoteOptions
            addLabels={addLabels}
            removeLabels={removeLabels}
            labels={props.labels}
            activeLabels={note.labelIdList}
          />
          <Styled.CloseButton>
            <Button onClick={saveNote}>Close</Button>
          </Styled.CloseButton>
        </Styled.OptionsContainer>
      </Styled.MainContainer>
      <Modal open={openSketchBoard} onClose={() => setOpenSketchBoard(false)}>
        <SketchBoard
          drawing={drawing}
          setDrawing={setDrawing}
          close={() => setOpenSketchBoard(false)}
        />
      </Modal>
    </>
  );
}
