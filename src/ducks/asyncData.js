import { setDataAC } from './set_data/set_data';
import { URL } from '../constants/patchApi';

export const asyncDataThunk = () => dispatch => {
  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(setDataAC(data)))
    .catch(err => new Error(err));
};
