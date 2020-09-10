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

export default function AddNewNote(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Styled.MainContainer maxWidth="sm">
      <Styled.TitleContainer open={open}>
        <Styled.StyledInput
          placeholder="Title"
          fullWidth
          multiline
          fontSize="1.2rem"
        />
        <PinNote />
      </Styled.TitleContainer>
      <Styled.NoteContainer>
        <Styled.StyledInput
          placeholder="Take a note..."
          fullWidth
          multiline
          onClick={() => setOpen(true)}
        />
        <AddImage style={{ display: open ? "none" : "inline-flex" }} />
      </Styled.NoteContainer>
      <Styled.OptionsContainer open={open}>
        <Reminder />
        <Collaborate />
        <AddColor />
        <AddImage />
        <ArchiveNote />
        <MoreNoteOptions />
        <Styled.CloseButton>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Styled.CloseButton>
      </Styled.OptionsContainer>
    </Styled.MainContainer>
  );
}
