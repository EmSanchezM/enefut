import Axios from '../../config/axios'; 

import {
  SELECTED_NOTICES,
  SEARCH_NOTICES,
  UPDATE_NOTICE,
  DELETE_NOTICE,
  ADD_NOTICE,
  FETCH_NOTICES_SUCCESS,
} from '../constants';

export const fetchNotices = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('notices');
         
          dispatch( {
            type: FETCH_NOTICES_SUCCESS,
            notices: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
}

export const selectNotice = (notice) => ({
  type: SELECTED_NOTICES,
  payload: notice,
});

export const noticeSearch = (searchTerm) => ({
  type: SEARCH_NOTICES,
  searchTerm,
});

export const deleteNotice = (noticeId) => (dispatch) => {
  Axios
    .delete(`notices/${noticeId}`)
    .then((response) => {
      dispatch({
        type: DELETE_NOTICE,
        payload: response.data.id
      });
    })
    .catch((err) => err);
};

export const updateNotice = (notice, noticeId) => (dispatch) => {
    Axios
    .put(`notices/${noticeId}`, notice)
    .then((response) => {
      dispatch({
        type: UPDATE_NOTICE,
        payload: response.data
      });
    })
    .catch((err) => err);
};

export const addNotice = (notice) => (dispatch)=> {
  Axios
    .post('notices', notice)
    .then((response) => {
      dispatch({
        type: ADD_NOTICE,
        payload: response.data,
      });
    })
    .catch((err) => err); 
};
