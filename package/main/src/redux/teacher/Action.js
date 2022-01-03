import Axios from '../../config/axios'; 

import {
  SELECTED_TEACHERS,
  SEARCH_TEACHERS,
  UPDATE_TEACHER,
  DELETE_TEACHER,
  ADD_TEACHER,
  FETCH_TEACHERS_SUCCESS,
} from '../constants';

export const fetchTeachers = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('teachers');
          console.log('axios', response.data.data)
          dispatch( {
            type: FETCH_TEACHERS_SUCCESS,
            teachers: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
}

export const selectTeacher = (teacher) => ({
  type: SELECTED_TEACHERS,
  payload: teacher,
});

export const teacherSearch = (searchTerm) => ({
  type: SEARCH_TEACHERS,
  searchTerm,
});

export const deleteTeacher = (teacherId) => (dispatch) => {
  Axios
    .delete(`teachers/${teacherId}`)
    .then((response) => {
      dispatch({
        type: DELETE_TEACHER,
        payload: response.data.id
      });
    })
    .catch((err) => err);
};

export const updateTeacher = (teacher, teacherId) => (dispatch) => {
    Axios
    .put(`teachers/${teacherId}`, teacher)
    .then((response) => {
      dispatch({
        type: UPDATE_TEACHER,
        payload: response.data
      });
    })
    .catch((err) => err);
};

export const addTeacher = (teacher) => (dispatch)=> {
  Axios
    .post('teachers', teacher)
    .then((response) => {
      dispatch({
        type: ADD_TEACHER,
        payload: response.data,
      });
    })
    .catch((err) => err); 
};
