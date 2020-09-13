import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PinNote from "./PinNote";
import Reminder from "./Reminder";
import Collaborate from "./Collaborate";
import AddColor from "./AddColor";
import AddImage from "./AddImage";
import ArchiveNote from "./ArchiveNote";
import MoreNoteOptions from "./MoreNoteOptions";
import * as Styled from "../styles/note.styled";
import {
  changeNoteColor,
  pinUnpinNotes,
  archiveNotes,
  trashNotes,
} from "../services/notesServices";

export default function Note(props) {
  const [note, setNote] = React.useState(props.note);

  React.useEffect(() => {
    setNote(props.note);
  }, [props.note]);

  const addColor = (color) => {
    setNote({ ...note, color: color.hex });
  };

  const saveColor = () => {
    let data = { color: note.color, noteIdList: [note.id] };
    changeNoteColor(data, props.token).then(
      (response) => response.data.data.success && props.updateNotes(props.token)
    );
  };

  const togglePin = () => {
    setNote({ ...note, isPined: !note.isPined });
    let data = { isPined: !note.isPined, noteIdList: [note.id] };
    pinUnpinNotes(data, props.token).then(
      (response) => response.data.data.success && props.updateNotes(props.token)
    );
  };
  const toggleArchive = () => {
    setNote({ ...note, isArchived: !note.isArchived });
    let data = { isArchived: !note.isArchived, noteIdList: [note.id] };
    archiveNotes(data, props.token).then(
      (response) => response.data.data.success && props.updateNotes(props.token)
    );
  };
  const deleteNote = () => {
    let data = { isDeleted: !note.isDeleted, noteIdList: [note.id] };
    trashNotes(data, props.token).then(
      (response) => response.data.data.success && props.updateNotes(props.token)
    );
  };

  const activeNoteOptions = [{ title: "Delete Note", onClick: deleteNote }];
  const deletedNoteOptions = [{ title: "Restore", onClick: deleteNote }];

  return (
    <Styled.NoteContainer
      className={note.isPined ? "pinedNote" : "note"}
      backgroundColor={note.color}
    >
      <CardContent>
        <Styled.TitleContainer>
          <Typography
            variant="h6"
            align="left"
            style={{ flex: 1 }}
            onClick={() => props.openNote(note)}
          >
            {note.title}
          </Typography>
          <PinNote isPined={note.isPined} togglePin={togglePin} />
        </Styled.TitleContainer>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="left"
          style={{ flex: 1 }}
          onClick={() => props.openNote(note)}
        >
          {note.description.split(" ").splice(0, 30).join(" ")}
        </Typography>
        <Styled.DescriptionContainer>
          {!note.isDeleted && <Reminder />}
          {!note.isDeleted && <Collaborate />}
          {!note.isDeleted && (
            <AddColor addColor={addColor} onPickerClose={saveColor} />
          )}
          {!note.isDeleted && <AddImage />}
          {!note.isDeleted && (
            <ArchiveNote
              isArchived={note.isArchived}
              toggleArchive={toggleArchive}
            />
          )}
          <MoreNoteOptions
            menuItems={note.isDeleted ? deletedNoteOptions : activeNoteOptions}
          />
        </Styled.DescriptionContainer>
      </CardContent>
    </Styled.NoteContainer>
  );
}
