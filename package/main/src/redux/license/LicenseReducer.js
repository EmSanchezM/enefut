import {
    SELECTED_LICENSES,
    SEARCH_LICENSES,
    UPDATE_LICENSE,
    DELETE_LICENSE,
    ADD_LICENSE,
    FETCH_LICENSES_SUCCESS,
  } from '../constants';
  
  const INIT_STATE = {
    licenses: [],
    licenseContent: 1,
    licenseSearch: '',
  };
  
  const LicenseReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_LICENSES_SUCCESS:
        return {
          ...state,
          licenses: action.licenses,
        };
  
      case SELECTED_LICENSES:
        return {
          ...state,
          licenseContent: action.id,
        };
  
      case SEARCH_LICENSES:
        return {
          ...state,
          licenseSearch: action.searchTerm,
        };
  
      case UPDATE_LICENSE:
        return {
          ...state,
          licenses: state.licenses.map((license) =>
            license.id === action.id ? action : license,
          ),
        };
      case DELETE_LICENSE:
        return {
          ...state,
          licenses: state.licenses.filter((license) =>
            license.id !== action.payload,
          ),
        };
      case ADD_LICENSE:
        return {
          ...state,
          licenses: [...state.licenses, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default LicenseReducer;
  