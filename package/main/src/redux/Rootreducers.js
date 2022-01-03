import { combineReducers } from 'redux';
import CustomizerReducer from './customizer/CustomizerReducer';
import chatReducer from './chats/ChatReducer';
import notesReducer from './notes/NotesReducer';
import emailReducer from './email/EmailReducer';
import studentReducer from './student/StudentReducer';
import teacherReducer from './teacher/TeacherReducer';
import classReducer from './classe/ClasseReducer';
import gradeReducer from './grade/GradeReducer';
import activityReducer from './activities/ActivityReducer';
import licenseReducer from './license/LicenseReducer';
import attendanceReducer from './attendance/AttendanceReducer';
import noticeReducer from './notices/NoticeReducer';

const RootReducers = combineReducers({
  CustomizerReducer,
  chatReducer,
  notesReducer,
  emailReducer,
  studentReducer,
  teacherReducer,
  classReducer,
  gradeReducer,
  activityReducer,
  licenseReducer,
  attendanceReducer,
  noticeReducer,
});

export default RootReducers;
