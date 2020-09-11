import axios from 'axios';
import { notesApiConstants } from '../apiConstants/notesApiConstants';

export function getNotesList(token) {
    return axios.get(process.env.REACT_APP_API_BASE_URL + notesApiConstants.getNotesList, {
        headers: {Authorization: token,}
    })
}