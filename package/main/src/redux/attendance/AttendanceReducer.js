import {
    SELECTED_ATTENDANCES,
    SEARCH_ATTENDANCES,
    UPDATE_ATTENDANCE,
    DELETE_ATTENDANCE,
    ADD_ATTENDANCE,
    FETCH_ATTENDANCES_SUCCESS,
  } from '../constants';
  
  const INIT_STATE = {
    attendances: [],
    attendanceContent: 1,
    attendanceSearch: '',
  };
  
  const AttendanceReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_ATTENDANCES_SUCCESS:
        return {
          ...state,
          attendances: action.attendances,
        };
  
      case SELECTED_ATTENDANCES:
        return {
          ...state,
          attendanceContent: action.id,
        };
  
      case SEARCH_ATTENDANCES:
        return {
          ...state,
          attendanceSearch: action.searchTerm,
        };
  
      case UPDATE_ATTENDANCE:
        return {
          ...state,
          attendances: state.attendances.map((attendance) =>
            attendance.id === action.id ? action : attendance,
          ),
        };
      case DELETE_ATTENDANCE:
        return {
          ...state,
          attendances: state.attendances.filter((attendance) =>
            attendance.id !== action.payload,
          ),
        };
      case ADD_ATTENDANCE:
        return {
          ...state,
          attendances: [...state.attendances, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default AttendanceReducer;
  