import {
    SELECTED_GRADES,
    SEARCH_GRADES,
    UPDATE_GRADE,
    DELETE_GRADE,
    ADD_GRADE,
    FETCH_GRADES_SUCCESS,
  } from '../constants';
  
  const INIT_STATE = {
    grades: [],
    gradeContent: 1,
    gradeSearch: '',
  };
  
  const GradeReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_GRADES_SUCCESS:
        return {
          ...state,
          grades: action.grades,
        };
  
      case SELECTED_GRADES:
        return {
          ...state,
          gradeContent: action.id,
        };
  
      case SEARCH_GRADES:
        return {
          ...state,
          gradeSearch: action.searchTerm,
        };
  
      case UPDATE_GRADE:
        return {
          ...state,
          grades: state.grades.map((grade) =>
            grade.id === action.id ? action : grade,
          ),
        };
      case DELETE_GRADE:
        return {
          ...state,
          grades: state.grades.filter((grade) =>
            grade.id !== action.payload,
          ),
        };
      case ADD_GRADE:
        return {
          ...state,
          grades: [...state.grades, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default GradeReducer;
  