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
import { changeNoteColor } from "../services/notesServices";

export default function Note(props) {
  const [note, setNote] = React.useState(props.note);

  const addColor = (color) => {
    setNote({ ...note, color: color.hex });
  };

  const saveColor = () => {
    let data = { color: note.color, noteIdList: [note.id] };
    changeNoteColor(data, props.token);
  };

  return (
    <Styled.NoteContainer className="note" backgroundColor={note.color}>
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
          <PinNote />
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
          <Reminder />
          <Collaborate />
          <AddColor addColor={addColor} onPickerClose={saveColor} />
          <AddImage />
          <ArchiveNote />
          <MoreNoteOptions />
        </Styled.DescriptionContainer>
      </CardContent>
    </Styled.NoteContainer>
  );
}
