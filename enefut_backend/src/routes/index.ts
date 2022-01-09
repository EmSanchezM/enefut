import { Router } from 'express';

import student from './student.routes';
import teacher from './teacher.routes';
import classe from './class.routes';
import license from './license.routes';
import activity from './activity.routes';
import grade from './grade.routes';
import notice from './notice.routes';
import attendance from './attendance.routes';
import enrollment from './enrollment.routes';

const router = Router();

router.use(student);
router.use(teacher);
router.use(classe);
router.use(license);
router.use(activity);
router.use(grade);
router.use(notice);
router.use(attendance);
router.use(enrollment);

export default router;