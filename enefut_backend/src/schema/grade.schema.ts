import { number, object, string, TypeOf } from "zod";

const payload = {
    body: object({
        
        cumulative: number({
            required_error: 'Acumulative is required'
        }).min(0, { message: 'Only positive numbers'}),

        quiz: number({
            required_error: 'Quiz is required'
        }).min(0, { message: 'Only positive numbers'}),

        average: number({
            required_error: 'Average is required'
        }).min(0, { message: 'Only positive numbers'}),

        student: string({
            required_error: 'Student ID is required'
        }),
        
        class: string({
            required_error: 'Class ID is required'
        }),

        obs: string({
            required_error: 'Observation is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        type: string({
            required_error: 'Type is required'
        }).min(2, { message: 'Must be 2 or more characters long'})
    })
};

const updatePayload = {
    body: object({
        
        cumulative: number({
            invalid_type_error: 'Cumulative must be a string'
        })
        .min(0, { message: 'Only positive numbers'})
        .optional(),

        quiz: number({
            invalid_type_error: 'Quiz must be a string'
        })
        .min(0, { message: 'Only positive numbers'})
        .optional(),

        average: number({
            invalid_type_error: 'Average must be a string'
        })
        .min(0, { message: 'Only positive numbers'})
        .optional(),

        student: string({
            invalid_type_error: 'Student ID must be a string'
        }).optional(),
        
        class: string({
            invalid_type_error: 'Class ID must be a string'
        }).optional(),

        obs: string({
            invalid_type_error: 'Observation must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        type: string({
            invalid_type_error: 'Type is required'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional()
    })
};

const params = {
    params: object({
        gradeId: string({
            required_error: 'Grade ID is required'
        }),
    }),
};

export const createGradeSchema = object({
    ...payload 
});

export const getGradeSchema = object({
    ...params 
});

export const updateGradeSchema = object({
    ...updatePayload,
    ...params
});

export const deleteGradeSchema = object({
    ...params 
});

export type CreateGradeInput = TypeOf<typeof createGradeSchema>;
export type UpdateGradeInput = TypeOf<typeof updateGradeSchema>;
export type ReadGradeInput = TypeOf<typeof getGradeSchema>;
export type DeleteGradeInput = TypeOf<typeof deleteGradeSchema>;
