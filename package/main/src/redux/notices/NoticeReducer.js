import {
    SELECTED_NOTICES,
    SEARCH_NOTICES,
    UPDATE_NOTICE,
    DELETE_NOTICE,
    ADD_NOTICE,
    FETCH_NOTICES_SUCCESS,
  } from '../constants';
  
  const INIT_STATE = {
    notices: [],
    noticeContent: 1,
    noticeSearch: '',
  };
  
  const NoticeReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_NOTICES_SUCCESS:
        return {
          ...state,
          notices: action.notices,
        };
  
      case SELECTED_NOTICES:
        return {
          ...state,
          noticeContent: action.id,
        };
  
      case SEARCH_NOTICES:
        return {
          ...state,
          noticeSearch: action.searchTerm,
        };
  
      case UPDATE_NOTICE:
        return {
          ...state,
          notices: state.notices.map((notice) =>
            notice.id === action.id ? action : notice,
          ),
        };
      case DELETE_NOTICE:
        return {
          ...state,
          notices: state.notices.filter((notice) =>
            notice.id !== action.payload,
          ),
        };
      case ADD_NOTICE:
        return {
          ...state,
          notices: [...state.notices, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default NoticeReducer;
  