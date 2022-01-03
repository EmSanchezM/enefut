import {
    SELECTED_ACTIVITIES,
    SEARCH_ACTIVITIES,
    UPDATE_ACTIVITY,
    DELETE_ACTIVITY,
    ADD_ACTIVITY,
    FETCH_ACTIVITIES_SUCCESS,
  } from '../constants';
  
  const INIT_STATE = {
    activities: [],
    activityContent: 1,
    activitySearch: '',
  };
  
  const ActivityReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_ACTIVITIES_SUCCESS:
        return {
          ...state,
          activities: action.activities,
        };
  
      case SELECTED_ACTIVITIES:
        return {
          ...state,
          activityContent: action.id,
        };
  
      case SEARCH_ACTIVITIES:
        return {
          ...state,
          activitySearch: action.searchTerm,
        };
  
      case UPDATE_ACTIVITY:
        return {
          ...state,
          activities: state.activities.map((activity) =>
            activity.id === action.id ? action : activity,
          ),
        };
      case DELETE_ACTIVITY:
        return {
          ...state,
          activities: state.activities.filter((activity) =>
            activity.id !== action.payload,
          ),
        };
      case ADD_ACTIVITY:
        return {
          ...state,
          activities: [...state.activities, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default ActivityReducer;
  