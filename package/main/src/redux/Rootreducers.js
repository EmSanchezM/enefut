import { combineReducers } from 'redux';
import CustomizerReducer from './customizer/CustomizerReducer';
import chatReducer from './chats/ChatReducer';
import notesReducer from './notes/NotesReducer';
import emailReducer from './email/EmailReducer';
import activityReducer from './activities/ActivityReducer';

const RootReducers = combineReducers({
  CustomizerReducer,
  chatReducer,
  notesReducer,
  emailReducer,
  activityReducer,
});

export default RootReducers;
