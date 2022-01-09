import Axios from '../../config/axios'; 

import {
  SELECTED_ACTIVITIES,
  FETCH_ACTIVITIES_SUCCESS,
  ADD_ACTIVITY,
  UPDATE_ACTIVITY,
  DELETE_ACTIVITY,
  SEARCH_ACTIVITIES,
} from '../constants';

export const fetchActivities = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('activities');
          
          dispatch( {
            type: FETCH_ACTIVITIES_SUCCESS,
            activities: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
}

export const selectActivity = (activity) => ({
  type: SELECTED_ACTIVITIES,
  payload: activity,
});

export const activitySearch = (searchTerm) => ({
  type: SEARCH_ACTIVITIES,
  searchTerm,
});

export const deleteActivity = (activityId) => (dispatch) => {
  Axios
    .delete(`activities/${activityId}`)
    .then((response) => {
      dispatch({
        type: DELETE_ACTIVITY,
        payload: response.data.id
      });
    })
    .catch((err) => err);
};

export const updateActivity = (activity, activityId) => (dispatch) => {
    Axios
    .put(`activities/${activityId}`, activity)
    .then((response) => {
      dispatch({
        type: UPDATE_ACTIVITY,
        payload: response.data
      });
    })
    .catch((err) => err);
};

export const addActivity = (activity) => (dispatch)=> {
  Axios
    .post('activities', activity)
    .then((response) => {
      dispatch({
        type: ADD_ACTIVITY,
        payload: response.data,
      });
    })
    .catch((err) => err); 
};

