import Axios from '../../config/axios'; 

import {
  SELECTED_ATTENDANCES,
  SEARCH_ATTENDANCES,
  UPDATE_ATTENDANCE,
  DELETE_ATTENDANCE,
  ADD_ATTENDANCE,
  FETCH_ATTENDANCES_SUCCESS,
} from '../constants';

export const fetchAttendances = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('attendances');
          
          dispatch( {
            type: FETCH_ATTENDANCES_SUCCESS,
            attendances: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
}

export const selectAttendance = (attendance) => ({
  type: SELECTED_ATTENDANCES,
  payload: attendance,
});

export const attendanceSearch = (searchTerm) => ({
  type: SEARCH_ATTENDANCES,
  searchTerm,
});

export const deleteAttendance = (attendanceId) => (dispatch) => {
  Axios
    .delete(`attendances/${attendanceId}`)
    .then((response) => {
      dispatch({
        type: DELETE_ATTENDANCE,
        payload: response.data.id
      });
    })
    .catch((err) => err);
};

export const updateAttendance = (attendance, attendanceId) => (dispatch) => {
    Axios
    .put(`attendances/${attendanceId}`, attendance)
    .then((response) => {
      dispatch({
        type: UPDATE_ATTENDANCE,
        payload: response.data
      });
    })
    .catch((err) => err);
};

export const addAttendance = (attendance) => (dispatch)=> {
  Axios
    .post('attendances', attendance)
    .then((response) => {
      dispatch({
        type: ADD_ATTENDANCE,
        payload: response.data,
      });
    })
    .catch((err) => err); 
};
