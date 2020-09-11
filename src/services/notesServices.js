import axios from 'axios';
import { notesApiConstants } from '../apiConstants/notesApiConstants';

export function addNotes(note, token) {
    return axios.post(process.env.REACT_APP_API_BASE_URL + notesApiConstants.addNotes, note, {
        headers: {Authorization: token,}
    })
}

export function getNotesList(token) {
    return axios.get(process.env.REACT_APP_API_BASE_URL + notesApiConstants.getNotesList, {
        headers: {Authorization: token,}
    })
}

export function updateNotes(note, token) {
    return axios.post(process.env.REACT_APP_API_BASE_URL + notesApiConstants.updateNotes, note, {
        headers: {Authorization: token,}
    })
}