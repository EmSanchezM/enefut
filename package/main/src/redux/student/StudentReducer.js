import {
    SELECTED_STUDENTS,
    SEARCH_STUDENTS,
    UPDATE_STUDENT,
    DELETE_STUDENT,
    ADD_STUDENT,
    FETCH_STUDENTS_SUCCESS,
  } from '../constants';
  
  const INIT_STATE = {
    students: [],
    studentsContent: 1,
    studentSearch: '',
  };
  
  const StudentReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_STUDENTS_SUCCESS:
        return {
          ...state,
          students: action.students,
        };
  
      case SELECTED_STUDENTS:
        return {
          ...state,
          studentContent: action.id,
        };
  
      case SEARCH_STUDENTS:
        return {
          ...state,
          studentSearch: action.searchTerm,
        };
  
      case UPDATE_STUDENT:
        return {
          ...state,
          students: state.students.map((student) =>
            student.id === action.id ? action : student,
          ),
        };
      case DELETE_STUDENT:
        return {
          ...state,
          students: state.students.filter((student) =>
            student.id !== action.payload,
          ),
        };
      case ADD_STUDENT:
        return {
          ...state,
          students: [...state.students, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default StudentReducer;
  