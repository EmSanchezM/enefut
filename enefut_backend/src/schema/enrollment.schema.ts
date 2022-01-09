import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
        section: string({
            required_error: 'Section is required'
        }).min(1, { message: 'Must be 2 or more characters long'}),

        student: string({
            required_error: 'Student ID is required'
        }),
        
        license: string({
            required_error: 'License ID is required'
        }),

        status: string({
            required_error: 'Status is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        type: string({
            required_error: 'Type enrollment is required'
        }).min(2, { message: 'Must be 2 or more characters long'})
    })
};

const updatePayload = {
    body : object({
        section: string({
            invalid_type_error: 'Title must be a string'
        })
        .min(1, { message: 'Must be 2 or more characters long'})
        .optional(),
    
        student: string({
            invalid_type_error: 'Student ID must be a string'
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
        enrollmentId: string({
            required_error: 'Enrollment ID is required'
        }),
    }),
};

export const createEnrollmentSchema = object({
    ...payload 
});

export const getEnrollmentSchema = object({
    ...params 
});

export const updateEnrollmentSchema = object({
    ...updatePayload,
    ...params
});

export const deleteEnrollmentSchema = object({
    ...params 
});

export type CreateEnrollmentInput = TypeOf<typeof createEnrollmentSchema>;
export type UpdateEnrollmentInput = TypeOf<typeof updateEnrollmentSchema>;
export type ReadEnrollmentInput   = TypeOf<typeof getEnrollmentSchema>;
export type DeleteEnrollmentInput = TypeOf<typeof deleteEnrollmentSchema>;
