import Axios from '../../config/axios'; 

import {
  SELECTED_GRADES,
  SEARCH_GRADES,
  UPDATE_GRADE,
  DELETE_GRADE,
  ADD_GRADE,
  FETCH_GRADES_SUCCESS,
} from '../constants';

export const fetchGrades = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('grades');
          
          dispatch( {
            type: FETCH_GRADES_SUCCESS,
            grades: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
}

export const selectGrade = (grade) => ({
  type: SELECTED_GRADES,
  payload: grade,
});

export const gradeSearch = (searchTerm) => ({
  type: SEARCH_GRADES,
  searchTerm,
});

export const deleteGrade = (gradeId) => (dispatch) => {
  Axios
    .delete(`grades/${gradeId}`)
    .then((response) => {
      dispatch({
        type: DELETE_GRADE,
        payload: response.data.id
      });
    })
    .catch((err) => err);
};

export const updateGrade = (grade, gradeId) => (dispatch) => {
    Axios
    .put(`grades/${gradeId}`, grade)
    .then((response) => {
      dispatch({
        type: UPDATE_GRADE,
        payload: response.data
      });
    })
    .catch((err) => err);
};

export const addGrade = (grade) => (dispatch)=> {
  Axios
    .post('grades', grade)
    .then((response) => {
      dispatch({
        type: ADD_GRADE,
        payload: response.data,
      });
    })
    .catch((err) => err); 
};

