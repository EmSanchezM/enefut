import { Express } from 'express';
import validateResource from './middleware/validateResource';

//Students
import { 
    createStudentHandler, 
    deleteStudentHandler, 
    findStudentHandler, 
    findStudentsHandler, 
    updateStudentHandler
} from './controller/student.controller';

import { 
    createStudentSchema, 
    deleteStudentSchema, 
    getStudentSchema, 
    updateStudentSchema
} from './schema/student.schema';

//Teachers
import { 
    createTeacherSchema, 
    deleteTeacherSchema, 
    getTeacherSchema, 
    updateTeacherSchema 
} from './schema/teacher.schema';

import { 
    createTeacherHandler, 
    deleteTeacherHandler, 
    findTeacherHandler, 
    findTeachersHandler, 
    updateTeacherHandler
} from './controller/teacher.controller';

//Classes
import { 
    createClassSchema, 
    deleteClassSchema, 
    getClassSchema, 
    updateClassSchema
} from './schema/class.schema';

import { 
    createClassHandler, 
    deleteClassHandler, 
    findClasesHandler,
    findClassHandler,
    updateClassHandler, 
} from './controller/class.controller';

//Licenses
import { 
    createLicenseSchema, 
    deleteLicenseSchema, 
    getLicenseSchema, 
    updateLicenseSchema
} from './schema/license.schema';

import { 
    createLicenseHandler, 
    deleteLicenseHandler, 
    findLicenseHandler, 
    findLicensesHandler, 
    updateLicenseHandler
} from './controller/license.controller';

//Activities
import { 
    createActivityHandler, 
    deleteActivityHandler, 
    findActivitiesHandler, 
    findActivityHandler, 
    updateActivityHandler 
} from './controller/activity.controller';

import { 
    createActivitySchema, 
    deleteActivitySchema, 
    getActivitySchema, 
    updateActivitySchema 
} from './schema/activity.schema';

//Grades
import { 
    createGradeHandler, 
    deleteGradeHandler, 
    findGradeHandler, 
    findGradesHandler, 
    updateGradeHandler 
} from './controller/grade.controller';

import { 
    createGradeSchema, 
    deleteGradeSchema, 
    getGradeSchema, 
    updateGradeSchema 
} from './schema/grade.schema';
import { createNoticeHandler, deleteNoticeHandler, findNoticeHandler, findNoticesHandler, updateNoticeHandler } from './controller/notice.controller';
import { createNoticeSchema, deleteNoticeSchema, getNoticeSchema, updateNoticeSchema } from './schema/notice.schema';

function routes(app: Express){
    // Students routes
    app.get('/api/students', findStudentsHandler);
    app.get('/api/students/:studentId', validateResource(getStudentSchema), findStudentHandler);
    app.post('/api/students', validateResource(createStudentSchema), createStudentHandler);
    app.put('/api/students/:studentId', validateResource(updateStudentSchema), updateStudentHandler);
    app.delete('/api/students/:studentId', validateResource(deleteStudentSchema), deleteStudentHandler);
    
    // Teacher routes
    app.get('/api/teachers', findTeachersHandler);
    app.get('/api/teachers/:teacherId', validateResource(getTeacherSchema), findTeacherHandler);
    app.post('/api/teachers', validateResource(createTeacherSchema), createTeacherHandler);
    app.put('/api/teachers/:teacherId', validateResource(updateTeacherSchema), updateTeacherHandler);
    app.delete('/api/teachers/:teacherId', validateResource(deleteTeacherSchema), deleteTeacherHandler);
    
    // Class routes
    app.get('/api/classes', findClasesHandler);
    app.get('/api/classes/:classId', validateResource(getClassSchema), findClassHandler);
    app.post('/api/classes', validateResource(createClassSchema), createClassHandler);
    app.put('/api/classes/:classId', validateResource(updateClassSchema), updateClassHandler);
    app.delete('/api/classes/:classId', validateResource(deleteClassSchema), deleteClassHandler); 
    
    // License routes
    app.get('/api/licenses', findLicensesHandler);
    app.get('/api/licenses/:licenseId', validateResource(getLicenseSchema), findLicenseHandler);
    app.post('/api/licenses', validateResource(createLicenseSchema), createLicenseHandler);
    app.put('/api/licenses/:licenseId', validateResource(updateLicenseSchema), updateLicenseHandler);
    app.delete('/api/licenses/:licenseId', validateResource(deleteLicenseSchema), deleteLicenseHandler);
    
    // Activity routes
    app.get('/api/activities', findActivitiesHandler);
    app.get('/api/activities/:activityId', validateResource(getActivitySchema), findActivityHandler);
    app.post('/api/activities', validateResource(createActivitySchema), createActivityHandler);
    app.put('/api/activities/:activityId', validateResource(updateActivitySchema), updateActivityHandler);
    app.delete('/api/activities/:activityId', validateResource(deleteActivitySchema), deleteActivityHandler);

    // Grades routes
    app.get('/api/grades', findGradesHandler);
    app.get('/api/grades/:gradeId', validateResource(getGradeSchema), findGradeHandler);
    app.post('/api/grades', validateResource(createGradeSchema), createGradeHandler);
    app.put('/api/grades/:gradeId', validateResource(updateGradeSchema), updateGradeHandler);
    app.delete('/api/grades/:gradeId', validateResource(deleteGradeSchema), deleteGradeHandler);

    // Notices routes
    app.get('/api/notices', findNoticesHandler);
    app.get('/api/notices/:noticeId', validateResource(getNoticeSchema), findNoticeHandler);
    app.post('/api/notices', validateResource(createNoticeSchema), createNoticeHandler);
    app.put('/api/notices/:noticeId', validateResource(updateNoticeSchema), updateNoticeHandler);
    app.delete('/api/notices/:noticeId', validateResource(deleteNoticeSchema), deleteNoticeHandler);
    
}

export default routes;