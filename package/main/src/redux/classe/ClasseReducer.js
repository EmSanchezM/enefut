import {
    SELECTED_CLASSES,
    SEARCH_CLASSES,
    UPDATE_CLASS,
    DELETE_CLASS,
    ADD_CLASS,
    FETCH_CLASSES_SUCCESS,
  } from '../constants';
  
  const INIT_STATE = {
    classes: [],
    classContent: 1,
    classSearch: '',
  };
  
  const ClassReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_CLASSES_SUCCESS:
        return {
          ...state,
          classes: action.classes,
        };
  
      case SELECTED_CLASSES:
        return {
          ...state,
          classContent: action.id,
        };
  
      case SEARCH_CLASSES:
        return {
          ...state,
          classSearch: action.searchTerm,
        };
  
      case UPDATE_CLASS:
        return {
          ...state,
          classes: state.classes.map((classe) =>
            classe.id === action.id ? action : classe,
          ),
        };
      case DELETE_CLASS:
        return {
          ...state,
          classes: state.classes.filter((classe) =>
            classe.id !== action.payload,
          ),
        };
      case ADD_CLASS:
        return {
          ...state,
          classes: [...state.classes, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default ClassReducer;
  