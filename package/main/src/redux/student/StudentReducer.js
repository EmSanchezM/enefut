import {
  SELECTED_STUDENTS,
  SEARCH_STUDENTS,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  ADD_STUDENT,
  FETCH_STUDENTS,
  CLEAR_STUDENT,
} from '../constants';

const INIT_STATE = {
  students: [],
  studentContent: null,
  studentSearch: '',
};

const StudentReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return {
        ...state,
        students: action.payload
      };

    case SELECTED_STUDENTS:
      return {
        ...state,
        studentContent: action.payload
      };

    case CLEAR_STUDENT:
      return {
        ...state,
        studentContent: null
      };

    case SEARCH_STUDENTS:
      return {
        ...state,
        studentSearch: action.searchTerm,
      };

    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map(student => student._id === action.payload._id ? action.payload : student),
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(student => student._id !== action.payload),
      };

    default:
      return state;
  }
};

export default StudentReducer;
