import Axios from '../../config/axios'; 

import {
  SELECTED_STUDENTS,
  SEARCH_STUDENTS,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  ADD_STUDENT,
  FETCH_STUDENTS_SUCCESS,
} from '../constants';

export const fetchStudents = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('students');
          console.log('axios', response.data.data)
          dispatch( {
            type: FETCH_STUDENTS_SUCCESS,
            students: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
}

export const selectStudent = (student) => ({
  type: SELECTED_STUDENTS,
  payload: student,
});

export const studentSearch = (searchTerm) => ({
  type: SEARCH_STUDENTS,
  searchTerm,
});

export const deleteStudent = (studentId) => (dispatch) => {
  Axios
    .delete(`students/${studentId}`)
    .then((response) => {
      dispatch({
        type: DELETE_STUDENT,
        payload: response.data.id
      });
    })
    .catch((err) => err);
};

export const updateStudent = (student, studentId) => (dispatch) => {
    Axios
    .put(`students/${studentId}`, student)
    .then((response) => {
      dispatch({
        type: UPDATE_STUDENT,
        payload: response.data
      });
    })
    .catch((err) => err);
};

export const addStudent = (student) => (dispatch)=> {
  Axios
    .post('students', student)
    .then((response) => {
      dispatch({
        type: ADD_STUDENT,
        payload: response.data,
      });
    })
    .catch((err) => err); 
};
