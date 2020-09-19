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
import ReminderChip from "./ReminderChip";
import DisplaySketchBoard from "./DisplaySketchBoard";
import * as Styled from "../styles/note.styled";
import {
  changeNoteColor,
  pinUnpinNotes,
  archiveNotes,
  trashNotes,
  addUpdateReminderNotes,
  removeReminderNotes,
} from "../services/notesServices";

export default function Note(props) {
  const [note, setNote] = React.useState(props.note);
  const [hover, setHover] = React.useState(false);

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

  const addReminder = (reminder) => {
    setNote({ ...note, reminder: [reminder] });
    let data = { reminder: reminder, noteIdList: [note.id] };
    addUpdateReminderNotes(data, props.token).then(
      (response) => response.data.data.success && props.updateNotes(props.token)
    );
  };
  const removeReminder = (reminder) => {
    setNote({ ...note, reminder: [] });
    let data = { noteIdList: [note.id] };
    removeReminderNotes(data, props.token).then(
      (response) => response.data.data.success && props.updateNotes(props.token)
    );
  };

  const activeNoteOptions = [{ title: "Delete Note", onClick: deleteNote }];
  const deletedNoteOptions = [{ title: "Restore", onClick: deleteNote }];

  return (
    <Styled.NoteContainer
      className={note.isPined ? "pinedNote" : "note"}
      backgroundColor={note.color}
      raised={hover}
      isGrid={props.isGrid}
      onMouseOver={()=> setHover(true)}
      onMouseOut={()=> setHover(false)}
    >
      <CardContent>
        {note.drawing.objects.length > 0 && (
          <Styled.SketchBoardContainer>
            <DisplaySketchBoard
              width={206}
              height={188}
              drawing={note.drawing}
              zoom={0.37}
              openSketchBoard={() => props.openNote(note)}
            />
          </Styled.SketchBoardContainer>
        )}
        <Styled.TitleContainer>
          <Typography
            variant="subtitle1"
            align="left"
            style={{ flex: 1 }}
            onClick={() => props.openNote(note)}
          >
            {note.title}
          </Typography>
          <PinNote isPined={note.isPined} togglePin={togglePin} />
        </Styled.TitleContainer>
        <Typography
          variant="subtitle2"
          gutterBottom
          align="left"
          style={{ flex: 1 }}
          onClick={() => props.openNote(note)}
        >
          {note.description.split(" ").splice(0, 30).join(" ")}
        </Typography>
        {note.reminder.length > 0 && (
          <ReminderChip
            reminder={note.reminder[0]}
            deleteReminder={removeReminder}
          />
        )}
        <Styled.DescriptionContainer>
          {!note.isDeleted && (
            <Reminder addReminder={addReminder} reminder={note.reminder[0]} />
          )}
          {!note.isDeleted && <Collaborate />}
          {!note.isDeleted && (
            <AddColor
              color={note.color}
              addColor={addColor}
              onPickerClose={saveColor}
            />
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
