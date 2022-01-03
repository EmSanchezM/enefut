import { number, object, string, TypeOf } from "zod";

const payload = {
    body: object({
        
        section: string({
            required_error: 'Section is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        observation: string({
            required_error: 'Observation is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        value: number({
            required_error: 'Value is required'
        }).min(0, { message: 'Only positive numbers'}),

        date: string(),

        student: string({
            required_error: 'Student ID is required'
        }),
        
        class: string({
            required_error: 'Class ID is required'
        }),

        license: string({
            required_error: 'License ID is required'
        }),

        status: string({
            invalid_type_error: 'Status must be a string'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        type: string({
            required_error: 'Type teacher is required'
        }).min(2, { message: 'Must be 2 or more characters long'})
    })
};

const updatePayload = {
    body : object({
        section: string({
            invalid_type_error: 'Section must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),
    
        observation: string({
            invalid_type_error: 'Observation must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),
    
        value: number({
            invalid_type_error: 'Value must be a number'
        })
        .min(0, { message: 'Only positive numbers'})
        .optional(),
    
        date: string().optional(),
    
        student: string({
            invalid_type_error: 'Student ID must be a string'
        }).optional(),
        
        class: string({
            invalid_type_error: 'Class ID must be a string'
        }).optional(),
    
        license: string({
            invalid_type_error: 'License ID must be a string'
        }).optional(),

        status: string({
            invalid_type_error: 'Status must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),
    
        type: string({
            invalid_type_error: 'Type teacher must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional()
    })
};

const params = {
    params: object({
        attendanceId: string({
            required_error: 'Attendance ID is required'
        }),
    }),
};

export const createAttendanceSchema = object({
    ...payload 
});

export const getAttendanceSchema = object({
    ...params 
});

export const updateAttendanceSchema = object({
    ...updatePayload,
    ...params
});

export const deleteAttendanceSchema = object({
    ...params 
});

export type CreateAttendanceInput = TypeOf<typeof createAttendanceSchema>;
export type ReadAttendanceInput   = TypeOf<typeof getAttendanceSchema>;
export type UpdateAttendanceInput = TypeOf<typeof updateAttendanceSchema>;
export type DeleteAttendanceInput = TypeOf<typeof deleteAttendanceSchema>;
