import { toast } from 'react-toastify';
import Axios from '../../config/axios'; 

import {
  SELECTED_STUDENTS,
  SEARCH_STUDENTS,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  ADD_STUDENT,
  FETCH_STUDENTS,
  CLEAR_STUDENT,
} from '../constants';

export const fetchStudents = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('students');
          dispatch({
            type: FETCH_STUDENTS,
            payload: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
};

export const selectStudent = (student) => ({
  type: SELECTED_STUDENTS,
  payload: student
});

export const studentSearch = (searchTerm) => ({
  type: SEARCH_STUDENTS,
  searchTerm,
});

export const addStudent = (student) => {
  return async(dispatch) => {
    try {
      const response = await Axios.post('students', student);

      if(response.data.ok){

        dispatch({
          type: ADD_STUDENT,
          payload: response.data.data 
        });

        toast.success('Estudiante agregado exitosamente!');
      }

    } catch (error) {
      console.log('ERROR', error);
      toast.error('ERROR ' . error);
    }
  }
};

export const updateStudent = (student, studentId) => {
  return async(dispatch) => {
    try {
      const response = await Axios.put(`students/${studentId}`, student);

      if(response.data.ok){

        dispatch({
          type: UPDATE_STUDENT,
          payload: response.data.data 
        });

        dispatch({ type: CLEAR_STUDENT });

        toast.success('Estudiante actualizado exitosamente!');
      }

    } catch (error) {
      console.log('ERROR', error);
      toast.error('ERROR ' . error);
    }
  }
};

export const deleteStudent = (studentId) => {
  return async(dispatch) => {
    try {
      const response = await Axios.delete(`students/${studentId}`);

      if(response.data.ok){

        dispatch({
          type: DELETE_STUDENT,
          payload: response.data.data._id 
        });

        toast.success('Estudiante eliminado exitosamente!');
      }

    } catch (error) {
      console.log('ERROR', error);
      toast.error('ERROR ' . error);
    }
  }
};



