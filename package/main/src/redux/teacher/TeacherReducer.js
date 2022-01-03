import {
    SELECTED_TEACHERS,
    SEARCH_TEACHERS,
    UPDATE_TEACHER,
    DELETE_TEACHER,
    ADD_TEACHER,
    FETCH_TEACHERS_SUCCESS,
  } from '../constants';
  
  const INIT_STATE = {
    teachers: [],
    teacherContent: 1,
    teacherSearch: '',
  };
  
  const TeacherReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_TEACHERS_SUCCESS:
        return {
          ...state,
          teachers: action.teachers,
        };
  
      case SELECTED_TEACHERS:
        return {
          ...state,
          teacherContent: action.id,
        };
  
      case SEARCH_TEACHERS:
        return {
          ...state,
          teacherSearch: action.searchTerm,
        };
  
      case UPDATE_TEACHER:
        return {
          ...state,
          teachers: state.teachers.map((teacher) =>
            teacher.id === action.id ? action : teacher,
          ),
        };
      case DELETE_TEACHER:
        return {
          ...state,
          teachers: state.teachers.filter((teacher) =>
            teacher.id !== action.payload,
          ),
        };
      case ADD_TEACHER:
        return {
          ...state,
          teachers: [...state.teachers, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default TeacherReducer;
  