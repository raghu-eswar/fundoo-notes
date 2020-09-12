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

export default function Note(props) {
  return (
    <Styled.NoteContainer className="note" backgroundColor={props.note.color}>
      <CardContent>
        <Styled.TitleContainer>
          <Typography
            variant="h6"
            align="left"
            style={{ flex: 1 }}
            onClick={() => props.openNote(props.note)}
          >
            {props.note.title}
          </Typography>
          <PinNote />
        </Styled.TitleContainer>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="left"
          style={{ flex: 1 }}
          onClick={() => props.openNote(props.note)}
        >
          {props.note.description.split(" ").splice(0, 30).join(" ")}
        </Typography>
        <Styled.DescriptionContainer>
          <Reminder />
          <Collaborate />
          <AddColor />
          <AddImage />
          <ArchiveNote />
          <MoreNoteOptions />
        </Styled.DescriptionContainer>
      </CardContent>
    </Styled.NoteContainer>
  );
}
