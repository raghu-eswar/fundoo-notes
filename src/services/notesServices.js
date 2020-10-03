import axios from "axios";
import { notesApiConstants } from "../apiConstants/notesApiConstants";

export function addNotes(note, token) {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.addNotes,
    note,
    {
      headers: { Authorization: token },
    }
  );
}

export function getNotesList(token) {
  return axios.get(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.getNotesList,
    {
      headers: { Authorization: token },
    }
  );
}

export function updateNotes(note, token) {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.updateNotes,
    note,
    {
      headers: { Authorization: token },
    }
  );
}
export function changeNoteColor(data, token) {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.changesColorNotes,
    data,
    {
      headers: { Authorization: token },
    }
  );
}
export const pinUnpinNotes = (data, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.pinUnpinNotes,
    data,
    {
      headers: { Authorization: token },
    }
  );
};
export const archiveNotes = (data, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.archiveNotes,
    data,
    {
      headers: { Authorization: token },
    }
  );
};
export const trashNotes = (data, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.trashNotes,
    data,
    {
      headers: { Authorization: token },
    }
  );
};
export const addUpdateReminderNotes = (data, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL +
      notesApiConstants.addUpdateReminderNotes,
    data,
    {
      headers: { Authorization: token },
    }
  );
};
export const removeReminderNotes = (data, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.removeReminderNotes,
    data,
    {
      headers: { Authorization: token },
    }
  );
};
export const noteLabels = (data, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.noteLabels,
    data,
    {
      headers: { Authorization: token },
    }
  );
};
export const getNoteLabelList = (token) => {
  return axios.get(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.getNoteLabelList,
    {
      headers: { Authorization: token },
    }
  );
};
export const updateNoteLabel = (labelId, label, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL +
      notesApiConstants.noteLabels +
      "/" +
      labelId +
      notesApiConstants.updateNoteLabel,
    label,
    {
      headers: { Authorization: token },
    }
  );
};
export const deleteNoteLabel = (labelId, token) => {
  return axios.delete(
    process.env.REACT_APP_API_BASE_URL +
      notesApiConstants.noteLabels +
      "/" +
      labelId +
      notesApiConstants.deleteNoteLabel,
    {
      headers: { Authorization: token },
    }
  );
};
export const removeLabel = (noteId, labelId, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL +
      notesApiConstants.notes +
      "/" +
      noteId +
      notesApiConstants.addLabelToNotes +
      "/" +
      labelId +
      notesApiConstants.remove,
    {},
    {
      headers: { Authorization: token },
    }
  );
};
export const addLabel = (noteId, labelId, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL +
      notesApiConstants.notes +
      "/" +
      noteId +
      notesApiConstants.addLabelToNotes +
      "/" +
      labelId +
      notesApiConstants.add,
    {},
    {
      headers: { Authorization: token },
    }
  );
};
export const searchUserList = (data, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + notesApiConstants.searchUserList,
    data,
    {
      headers: { Authorization: token },
    }
  );
};
export const AddcollaboratorsNotes = (noteId, data, token) => {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL +
      notesApiConstants.notes +
      "/" +
      noteId +
      notesApiConstants.AddcollaboratorsNotes,
    data,
    {
      headers: { Authorization: token },
    }
  );
};
export const removeCollaboratorsNotes = (noteId, userId, token) => {
  return axios.delete(
    process.env.REACT_APP_API_BASE_URL +
      notesApiConstants.notes +
      "/" +
      noteId +
      notesApiConstants.removeCollaboratorsNotes +
      "/" +
      userId,
    {
      headers: { Authorization: token },
    }
  );
};
