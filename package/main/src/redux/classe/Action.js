import Axios from '../../config/axios'; 

import {
  SELECTED_CLASSES,
  SEARCH_CLASSES,
  UPDATE_CLASS,
  DELETE_CLASS,
  ADD_CLASS,
  FETCH_CLASSES_SUCCESS,
} from '../constants';

export const fetchClasses = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('classes');
          
          dispatch( {
            type: FETCH_CLASSES_SUCCESS,
            classes: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
}

export const selectClasse = (classe) => ({
  type: SELECTED_CLASSES,
  payload: classe,
});

export const classSearch = (searchTerm) => ({
  type: SEARCH_CLASSES,
  searchTerm,
});

export const deleteClass = (classId) => (dispatch) => {
  Axios
    .delete(`classes/${classId}`)
    .then((response) => {
      dispatch({
        type: DELETE_CLASS,
        payload: response.data.id
      });
    })
    .catch((err) => err);
};

export const updateClass = (classe, classId) => (dispatch) => {
    Axios
    .put(`classes/${classId}`, classe)
    .then((response) => {
      dispatch({
        type: UPDATE_CLASS,
        payload: response.data
      });
    })
    .catch((err) => err);
};

export const addClass = (classe) => (dispatch)=> {
  Axios
    .post('classes', classe)
    .then((response) => {
      dispatch({
        type: ADD_CLASS,
        payload: response.data,
      });
    })
    .catch((err) => err); 
};
